function AddCreator() {
  return (
    <div>
      <h1>Add Creator</h1>

      <form>
        <input placeholder="Name" />
        <input placeholder="URL" />
        <input placeholder="Image URL" />
        <textarea placeholder="Description" />

        <button type="submit">
          Add Creator
        </button>
      </form>
    </div>
  );
}

export default AddCreator;