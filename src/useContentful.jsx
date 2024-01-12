import { createClient } from 'contentful'

const useContentful = () => {

    const space = import.meta.env.VITE_REACT_KEY_CONTENTFUL_SPACE;
    const accessToken = import.meta.env.VITE_REACT_KEY_CONTENTFUL;


    const client = createClient({
        space: space,
        accessToken: accessToken,
        host: "preview.contentful.com"
    });

    const getRecipes = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "recipes",
                select: "fields"
            });

            

            const sanitizedEntries = entries.items.map ( (item) => {
                const picture = item.fields.picture.fields;

                return {
                    ...item.fields,
                    picture,
                }
            })

            return sanitizedEntries;
        } catch (error) {
            console.log("Error fetching data ${error}");
        }
    }
    return { getRecipes };

}

export default useContentful;