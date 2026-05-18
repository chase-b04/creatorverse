import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { supabase } from "../client";

function AddCreator() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  const addCreator = async (event) => {
    event.preventDefault();

    const { error } = await supabase.from("creators").insert({
      name,
      url,
      description,
      imageURL: imageURL || null,
    });

    if (error) {
      console.error(error);
      return;
    }

    navigate("/");
  };

  return (
    <div>
      <h1>Add Creator</h1>

      <form onSubmit={addCreator}>
        <input
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="URL"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          placeholder="Image URL (optional)"
          value={imageURL}
          onChange={(event) => setImageURL(event.target.value)}
        />

        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
}

export default AddCreator;