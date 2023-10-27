const Movie = ({ movie, users, profiles }) => {
  return (
    <div className="movie">
      <p>
        {movie.name} has been favorited by {profiles.length === 0 && "no one"}
      </p>
      <ol>
        {profiles.map((profile) => {
          return (
            <li key={users[profile.userID].id}>{users[profile.userID].name}</li>
          );
        })}
      </ol>
    </div>
  );
};
export default Movie;
