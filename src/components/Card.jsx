function Card({ name, url, description, imageURL }) {
  return (
    <div className="card">
      <img src={imageURL} alt={name} width="200" />

      <Link to={`/creator/${name}`}>
        <h2>{name}</h2>
      </Link>

      <p>{description}</p>

      <a href={url}>Visit Creator</a>
    </div>
  );
}

export default Card;