function EditCreator() {
  return (
    <div>
      <h1>Edit Creator</h1>

      <form>
        <input placeholder="Name" />
        <input placeholder="URL" />
        <textarea placeholder="Description" />

        <button type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditCreator;