function Card({ name, url, description, imageURL }) {
  return (
    <div className="card">
      <img src={imageURL} alt={name} width="200" />

      <h2>{name}</h2>

      <p>{description}</p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Channel
      </a>
    </div>
  );
}

export default Card;