import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const useSingleentry = (id) => {
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
        const response = await client.getEntry(id);
        setEntry(response.fields);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEntry();
  }, [id]);

  return entry;
};

export default useSingleentry;