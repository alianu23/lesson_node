import React from "react";

import TRow from "./trow";

const TBody = ({ users, handleUpdater, handleDelete }) => {
  return (
    <tbody>
      {users.map((user) => (
        <TRow
          user={user}
          handleUpdater={handleUpdater}
          handleDelete={handleDelete}
          key={user.id}
        />
      ))}
    </tbody>
  );
};

export default TBody;
