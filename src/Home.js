import React from "react";
import { Link } from "react-router-dom";

const users = [
  {
    name: `Param`
  },
  {
    name: `Vennila`
  },
  {
    name: `Afrin`
  }
];
export default function Home() {
  return (
    <div>
      <h3>Users Page</h3>
      {users.map((user, index) => (
        <h5 key={index}>
          <Link to={`/home/${index + 1}`}>{user.name}'s Page</Link>
        </h5>
      ))}
    </div>
  );
}
