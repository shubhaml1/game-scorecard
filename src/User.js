import React from "react";

function User({ user, hide }) {
  const { fname, lname, username, games } = user;

  return (
    <tr>
      <td>{fname}</td>
      <td>{lname}</td>
      <td>{username}</td>
      <td>
        {username} played {hide ? "*" : games ?? 0} games
      </td>
    </tr>
  );
}

export default User;
