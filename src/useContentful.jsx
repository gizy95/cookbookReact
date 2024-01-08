import { createClient } from 'contentful'

const useContentful = () => {

    const space = "xa7obka5ntht";
    const accessToken = "HUrXSj4H8HsmqhPCDgyckdd-2y2mNhkqd886wxZS5Ig";


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
            return entries;
        } catch (error) {
            console.log("Error fetching data ${error}");
        }
    }
    return { getRecipes };

}

export default useContentful;