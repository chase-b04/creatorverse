import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { supabase } from "../client";

function ViewCreator() {
  const { name } = useParams();
  const navigate = useNavigate();

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
    return (
      <div className="loading-screen">
        <h1>Loading!!!</h1>
      </div>
    );
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
      <div style={{ marginTop: 12 }}>
        <Link to={`/edit/${creator.name}`}>
          <button>Edit</button>
        </Link>
        <button style={{ marginLeft: 8 }} onClick={() => navigate("/")}>Back</button>
      </div>
    </div>
  );
}

export default ViewCreator;