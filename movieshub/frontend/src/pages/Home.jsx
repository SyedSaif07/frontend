import { MovieCard } from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //const movies = getPopularMovies();  without useEffect this api will be called for every render. so we use useEffect to run only during the first time the component is rendered

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return
    setLoading(true)
    try {
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)

    } catch (err) {
      console.log(err)
      setError("Failed to search movies..")
    }
    finally {
      setLoading(false)
    }
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading..</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (
              movie, // uses implicit return
            ) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard key={movie.id} movie={movie} />
              ),
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
