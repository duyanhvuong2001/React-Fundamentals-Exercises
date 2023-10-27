import Movie from "./Movie";
const MovieList = ({ profiles, users, movies }) => {
  return (
    <div className="movie-list">
      <ol>
        {Object.values(movies).map((movie) => {
          const profilesForMovie = profiles.filter(
            (profile) => parseInt(profile.favoriteMovieID) === movie.id
          );
          return (
            <li key={movie.id}>
              <Movie movie={movie} profiles={profilesForMovie} users={users} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default MovieList;
