import React from "react";
import TRow from "./trow";

const TBody = ({ users }) => {
  return (
    <tbody>
      {users.map((user) => (
        <TRow user={user} key={user.id} />
      ))}
    </tbody>
  );
};

export default TBody;
