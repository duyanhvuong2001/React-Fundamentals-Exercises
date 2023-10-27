import { useState } from "react";
import User from "./User";

const UserList = ({ users }) => {
  const [displayGames, setDisplayGames] = useState(true);

  const handleDisplayGamesPlayed = (e) => {
    e.preventDefault();
    setDisplayGames(!displayGames);
  };
  return (
    <div className="user-list">
      <button onClick={handleDisplayGamesPlayed}>
        {!displayGames ? "Show Games Played" : "Hide Games Played"}
      </button>
      <ol>
        {users.map((u) => {
          return (
            <li key={u.username}>
              <User user={u} showGamesPlayed={displayGames} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default UserList;
