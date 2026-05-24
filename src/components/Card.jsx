import { Link } from "react-router-dom";

function Card({ name, url, description, imageURL }) {
  return (
    <div className="card">
      <img className="card-media" src={imageURL} alt={name} />

      <h2>{name}</h2>

      <p>{description}</p>

      <a href={url}>Visit Creator</a>

      <Link to={`/creator/${name}`}>
        <button type="button">View Creator</button>
      </Link>
    </div>
  );
}

export default Card;