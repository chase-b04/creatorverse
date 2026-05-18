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

    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <h1>Edit Creator</h1>

      <form onSubmit={updateCreator}>
        <input
          placeholder="Name"
          value={creatorName}
          onChange={(event) => setCreatorName(event.target.value)}
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

        <button type="submit">Save Changes</button>
      </form>

      <button type="button" onClick={deleteCreator}>
        Delete Creator
      </button>
    </div>
  );
}

export default EditCreator;