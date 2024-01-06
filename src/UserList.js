import React, { useState } from "react";
import User from "./User";
import GameToggle from "./GameToggle";

const UserList = ({ users }) => {
  const [hide, setHide] = useState(false);

  const toggleGames = () => {
    setHide((prevHide) => !prevHide);
  };

  return (
    <div>
      <h3>Users</h3>
      {users.length > 0 && (
        <table>
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Username</td>
              <td>Games</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User key={user.username} user={user} hide={hide} />
            ))}
          </tbody>
        </table>
      )}
      <GameToggle toggleGames={toggleGames} hide={hide} />
    </div>
  );
};

export default UserList;
