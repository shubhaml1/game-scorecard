import React, { useState } from "react";

const UserInput = ({ users, saveUser }) => {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    username: "",
    games: 0,
    unique: true,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
      unique: true,
    }));
  };

  const fieldsAreValid = () => {
    const { fname, lname, username } = userData;
    return fname.length > 0 && lname.length > 0 && username.length > 0;
  };

  const addUser = (e) => {
    e.preventDefault();
    if (users.some((user) => user.username === userData.username)) {
      setUserData({ ...userData, unique: false });
    } else {
      setUserData({ ...userData, unique: true });
      saveUser({ ...userData });
    }
  };

  const { fname, lname, username, unique } = userData;

  return (
    <div>
      <h3>Add User</h3>

      <form onSubmit={addUser}>
        <label>
          First Name:
          <input
            name="fname"
            type="text"
            value={fname}
            onChange={handleChange}
            className="form-element"
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            name="lname"
            type="text"
            value={lname}
            onChange={handleChange}
            className="form-element"
          />
        </label>
        <br />
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
            required
            className={!unique ? "form-element error" : "form-element"}
          />
          {!unique && <span className="red">Username must be unique!</span>}
        </label>
        <br />
        <button class = "add-button" disabled={!fieldsAreValid()}>Add</button>
      </form>
    </div>
  );
};

export default UserInput;
