import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { supabase } from "../client";

function ViewCreator() {
  const { name } = useParams();

  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("name", name)
        .single();

      if (error) {
        console.error(error);
      } else {
        setCreator(data);
      }
    };

    fetchCreator();
  }, [name]);

  if (!creator) {
    return <h1>Loading!!!</h1>;
  }

  return (
    <div>
      <h1>{creator.name}</h1>

      <img
        src={creator.imageURL}
        alt={creator.name}
        width="300"
      />

      <p>
        <strong>URL:</strong>{" "}
        <a
          href={creator.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {creator.url}
        </a>
      </p>

      <p>
        <strong>Description:</strong>{" "}
        {creator.description}
      </p>
    </div>
  );
}

export default ViewCreator;