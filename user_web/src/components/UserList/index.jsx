import React from "react";
import THead from "./thead";
import TBody from "./tbody";

const Table = ({ users, handleUpdater, handleDelete }) => {
  return (
    <div className="">
      <table className="table">
        <THead />
        <TBody
          users={users}
          handleUpdater={handleUpdater}
          handleDelete={handleDelete}
        />
      </table>
    </div>
  );
};

export default Table;
