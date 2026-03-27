import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import { MovieCard } from "../components/MovieCard";

export function Favorite() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorite </h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No favorite movies yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  );
}
