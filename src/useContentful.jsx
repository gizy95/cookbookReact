import { createClient } from 'contentful'

const useContentful = () => {

    const client = createClient({
        space: "",
        accessToken: "",
        host: "preview.contentful.com"
    });

    const getRecipes = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "recipe",
                select: "fields"
            });
            return entries;
        } catch (error) {
            console.log("Error fetching data ${error}");
        }
        return { getRecipes };
    }

}

export default useContentful