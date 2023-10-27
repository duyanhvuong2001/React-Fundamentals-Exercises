import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import UserList from "./UserList";
import AddUser from "./AddUser";

const App = () => {
  const [users, setUsers] = useState([
    { username: "meka", firstname: "Adam", lastname: "Den", gamesPlayed: 0 },
    { username: "mad", firstname: "sadf", lastname: "sad", gamesPlayed: 0 },
    { username: "kami", firstname: "fca", lastname: "lmae", gamesPlayed: 0 },
  ]);

  const handleAddUser = (user) => {
    let errMsg = "";
    users.filter((u) => {
      return u.username === user.username;
    }).length === 0
      ? setUsers([...users, user])
      : (errMsg = "Username already exists");
    return errMsg;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <AddUser onAddUser={handleAddUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;
