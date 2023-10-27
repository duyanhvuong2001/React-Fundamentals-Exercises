const User = ({ user, showGamesPlayed }) => {
  return (
    <div className="user">
      <p>
        {user.username} played {!showGamesPlayed ? "*" : `${user.gamesPlayed}`}
      </p>
    </div>
  );
};
export default User;
