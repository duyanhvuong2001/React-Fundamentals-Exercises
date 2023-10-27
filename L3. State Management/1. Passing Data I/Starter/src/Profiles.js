const Profiles = ({ profiles, users, movies }) => {
  console.log(users);
  return (
    <div className="profiles">
      {profiles.map((profile) => {
        const userName = users[profile.userID].name;
        const favoriteMovie = movies[profile.favoriteMovieID].name;
        return (
          <li key={profile.id}>
            {userName}'s favorite movie is {favoriteMovie}
          </li>
        );
      })}
    </div>
  );
};
export default Profiles;
