import { Link } from "react-router-dom";

function MovieCard({ id, title, description, posterURL, rating }) {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={`${title} poster`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>Rating: {rating}</span>
      <Link to={`/movie/${id}`}>View Details</Link>
    </div>
  );
}

export default MovieCard;
