import { useState } from "react";

const AddUser = ({ onAddUser }) => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };

  const fieldsAreFilled = () => {
    return !(username === "" || lastname === "" || firstname === "");
  };

  const handleAddUser = () => {
    const newUser = {
      username: username,
      firstname: firstname,
      lastname: lastname,
      gamesPlayed: 0,
    };
    const error = onAddUser(newUser);
    setErrMsg(error);

    //Reset fields based on error
    if (error === "") {
      setUsername("");
      setFirstname("");
      setLastname("");
    }
  };
  return (
    <div className="add-user">
      <p>
        Username
        <input type="text" value={username} onChange={handleUsernameChange} />
      </p>

      <p>
        First Name:
        <input type="text" value={firstname} onChange={handleFirstnameChange} />
      </p>
      <p>
        Last Name:
        <input type="text" value={lastname} onChange={handleLastnameChange} />
      </p>
      <button onClick={handleAddUser} disabled={!fieldsAreFilled()}>
        Add
      </button>
      <p>{errMsg}</p>
    </div>
  );
};

export default AddUser;
