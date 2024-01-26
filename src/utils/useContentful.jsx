import { createClient } from "contentful";

const useContentful = () => {
  const space = import.meta.env.VITE_REACT_KEY_CONTENTFUL_SPACE;
  const accessToken = import.meta.env.VITE_REACT_KEY_CONTENTFUL;

  const client = createClient({
    space: space,
    accessToken: accessToken,
    host: "preview.contentful.com",
  });

  const getRecipes = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "recipes",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const picture = item.fields.picture.fields;
        const id = item.sys.id;

        return {
          ...item.fields,
          picture,
          id,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log("Error fetching data ${error}");
    }

  };
  const getRecipe = async (id) => {
    try {
      let entry = await client.getEntry(id);
      console.log(entry)
      const picture = entry.fields.picture.fields;
      const sanitizedEntry = {
        ...entry.fields,
        picture,
        id: entry.sys.id,
      };

      return sanitizedEntry;
    } catch (error) {
      console.log(error);
    }

  };

  return { getRecipes, getRecipe };
};

export default useContentful;
