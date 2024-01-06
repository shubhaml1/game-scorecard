import React, { useState } from "react";
import "./App.css";
import UserInput from "./UserInput";
import UserList from "./UserList";
import logo from "./logo.svg";

const App = () => {
  const [users, setUsers] = useState([
    { fname: "Shubham", lname: "Singh", username: "Shubham007", games: 5 },
    { fname: "Nikki", lname: "Singh", username: "Nikki99", games: 4 },
  ]);

  const saveUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
        <p>Exercise 1 - All Together</p>
      </header>
      <main className="App-main">
        <h2>User Game List</h2>
        <div className="container">
          <UserInput users={users} saveUser={saveUser} />
          <UserList users={users} />
        </div>
      </main>
    </div>
  );
};

export default App;
