import React from "react";
import THead from "./thead";
import TBody from "./tbody";

const Table = ({ users }) => {
  return (
    <div className="">
      <table className="table">
        <THead />
        <TBody users={users} />
      </table>
    </div>
  );
};

export default Table;
