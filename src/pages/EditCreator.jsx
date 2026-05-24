import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { supabase } from "../client";

function EditCreator() {
  const navigate = useNavigate();
  const { name } = useParams();

  const [creatorName, setCreatorName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("name", name)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setCreatorName(data.name || "");
      setUrl(data.url || "");
      setDescription(data.description || "");
      setImageURL(data.imageURL || "");
    };

    fetchCreator();
  }, [name]);

  const updateCreator = async (event) => {
    event.preventDefault();

    const { error } = await supabase
      .from("creators")
      .update({
        name: creatorName,
        url,
        description,
        imageURL: imageURL || null,
      })
      .eq("name", name);

    if (error) {
      console.error(error);
      return;
    }

    navigate(`/creator/${creatorName}`);
  };

  const deleteCreator = async () => {
    const { error } = await supabase
      .from("creators")
      .delete()
      .eq("name", name);

    if (error) {
      console.error(error);
      return;
    }

    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1>Edit Creator</h1>

      <form onSubmit={updateCreator} className="edit-form">
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-input"
            placeholder="Name"
            value={creatorName}
            onChange={(event) => setCreatorName(event.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="url">URL</label>
          <input
            id="url"
            name="url"
            type="text"
            className="form-input"
            placeholder="https://example.com"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className="form-textarea"
            rows={6}
            inputMode="text"
            placeholder="Short description or bio"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="imageURL">Image URL (optional)</label>
          <input
            id="imageURL"
            name="imageURL"
            type="text"
            className="form-input"
            placeholder="https://.../photo.jpg"
            value={imageURL}
            onChange={(event) => setImageURL(event.target.value)}
          />
        </div>

        <div className="form-row form-actions">
          <button
            type="button"
            onClick={() => navigate(`/creator/${name}`)}
            className="secondary"
          >
            Back
          </button>
          <button type="submit">Save Changes</button>
        </div>
      </form>

      <div style={{ marginTop: 12 }}>
        <button
          type="button"
          onClick={deleteCreator}
          className="danger"
          style={{ marginLeft: 8 }}
        >
          Delete Creator
        </button>
      </div>
    </div>
  );
}

export default EditCreator;