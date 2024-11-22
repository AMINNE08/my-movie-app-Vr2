import { useParams, Link } from "react-router-dom";

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <img src={movie.posterURL} alt={`${movie.title} poster`} />
      <div>
        <iframe
          width="560"
          height="315"
          src={movie.trailerURL}
          title={`${movie.title} Trailer`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default MovieDetails;
