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

      <form onSubmit={addCreator} className="edit-form">
        <div className="form-row">
          <label htmlFor="add-name">Name</label>
          <input
            id="add-name"
            className="form-input"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="add-url">URL</label>
          <input
            id="add-url"
            className="form-input"
            placeholder="URL"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="add-description">Description</label>
          <textarea
            id="add-description"
            className="form-textarea"
            placeholder="Description"
            value={description}
            inputMode="text"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="add-image">Image URL (optional)</label>
          <input
            id="add-image"
            className="form-input"
            placeholder="Image URL (optional)"
            value={imageURL}
            onChange={(event) => setImageURL(event.target.value)}
          />
        </div>

        <div className="form-row form-actions">
          <button type="submit">Add Creator</button>
        </div>
      </form>
    </div>
  );
}

export default AddCreator;