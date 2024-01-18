import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const useSingleEntry = (course) => {
  const [entry, setEntry] = useState(null);
  const space = import.meta.env.VITE_REACT_KEY_CONTENTFUL_SPACE;
  const accessToken = import.meta.env.VITE_REACT_KEY_CONTENTFUL;

  useEffect(() => {
    const client = createClient({
      space: space,
      accessToken: accessToken,
      host: "preview.contentful.com",
    });

    const fetchEntry = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'recipes',
          'fields.course': course,
          limit: 1,
        });

        if (response.items.length > 0) {
          setEntry(response.items[0].fields);
        } else {
          setEntry(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchEntry();
  }, [course]);

  return entry;
};

export default useSingleEntry;