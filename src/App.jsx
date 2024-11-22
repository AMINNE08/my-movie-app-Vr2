import { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from './MovieDetails';
import './styles.css';


function App() {
  const initialMovies = [
    {
      id:1,
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://m.media-amazon.com/images/I/91b3Xtjt0IL._AC_UL480_FMwebp_QL65_.jpg" ,
      rating: 4.8,
      trailerURL: "https://www.youtube.com/watch?v=YoHD9XEInc0&pp=ygURaW5jZXB0aW9uIHRyYWlsZXI%3D"
    },
    {
      id:2,
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years.",
      posterURL: "https://m.media-amazon.com/images/I/71uYo-PDgnL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.9,
      trailerURL: "https://www.youtube.com/watch?v=PLl99DlL6b4&pp=ygUgVGhlIFNoYXdzaGFuayBSZWRlbXB0aW9uIHRyYWlsZXI%3D"
    },
    {
      id:3,
      title: "The Godfather",
      description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
      posterURL: "https://m.media-amazon.com/images/I/71JPziIzj7L._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.7,
      trailerURL: "https://www.youtube.com/watch?v=UaVTIH8mujA&pp=ygUVVGhlIEdvZGZhdGhlciB0cmFpbGVy"
    },
    {
      id:4,
      title: "The Dark Knight",
      description: "When the menace known as the Joker emerges, Batman must accept one of the greatest tests of his life.",
      posterURL: "https://m.media-amazon.com/images/I/81rGCm0PyHL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.8,
      trailerURL: "https://www.youtube.com/watch?v=EXeTwQWrcwY&pp=ygUXdGhlIGRhcmsga25pZ2h0IHRyYWlsZXI%3D"
    },
    {
      id:5,
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, and others intertwine in a series of incidents.",
      posterURL: "https://m.media-amazon.com/images/I/617CRUq1QgL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.6,
      trailerURL: "https://www.youtube.com/watch?v=s7EdQ4FqbhY&pp=ygUUUHVscCBGaWN0aW9uIHRyYWlsZXI%3D"
    },
    {
      id:6,
      title: "Fight Club",
      description: "An insomniac office worker and a soap maker form an underground fight club.",
      posterURL: "https://m.media-amazon.com/images/I/71z-6ktMRTL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.4,
      trailerURL: "https://www.youtube.com/watch?v=BdJKm16Co6M&pp=ygUSZmlnaHQgY2x1YiB0cmFpbGVy"
    },
    {
      id:7,
      title: "Forrest Gump",
      description: "The story of Forrest Gump, a man with a low IQ but a big heart.",
      posterURL: "https://m.media-amazon.com/images/I/71CuAt3ey+L._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.5,
      trailerURL: "https://www.youtube.com/watch?v=bLvqoHBptjg&pp=ygUURm9ycmVzdCBHdW1wIHRyYWlsZXI%3D"
    },
  ];

  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  // Handle filtering logic
  const handleFilter = (title, rating) => {
    const filtered = movies.filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(title.toLowerCase());
      const ratingMatch = rating ? movie.rating >= rating : true;
      return titleMatch && ratingMatch;
    });
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...filteredMovies, newMovie]); 
  };

  return (
    <Router>
    <div className="App">
      <h1>My Movie App</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddMovie onAdd={handleAddMovie} />
              <Filter onFilter={handleFilter} />
              <MovieList movies={filteredMovies} />
            </>
          }
        />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
