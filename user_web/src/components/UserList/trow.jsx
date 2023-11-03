import React, { useEffect, useState } from "react";

import Form from "../Form";

const TRow = ({ user }) => {
  const getDepartment = (department) => {
    switch (department) {
      case "human resource": {
        return (
          <div className={`badge badge-primary badge-outline`}>
            {user.department}
          </div>
        );
      }
      case "technology": {
        return (
          <div className={`badge badge-secondary badge-outline`}>
            {user.department}
          </div>
        );
      }
      case "finance": {
        return (
          <div className={`badge badge-default badge-outline`}>
            {user.department}
          </div>
        );
      }
      default: {
        return (
          <div className={`badge badge-accent badge-outline`}>
            {user.department}
          </div>
        );
      }
    }
  };

  const [open, setOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [userList, setUserList] = useState([]);

  const closeForm = () => {
    console.log("Formee");
    setOpen(false);
    setRefresh(!refresh);
  };

  const getAllUser = async () => {
    const { users } = await fetch("http://localhost:8008/api/users").then(
      (res) => res.json()
    );
    setUserList(users);
  };

  useEffect(() => {
    getAllUser();
  }, [refresh]);

  return (
    <tr className="hover:bg-slate-100">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={user.avatarUrl} alt={user.firstName} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <span className="font-bold">{user.firstName}</span>
      </td>
      <td>
        <span className="font-bold">{user.lastName}</span>
      </td>
      <td>
        <span className="font-bold">{user.email}</span>
      </td>
      <td>
        <button className="btn btn-ghost btn-xs">{user.birthDate}</button>
      </td>
      <td>{getDepartment(user.department)}</td>
      <td>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className=" btn btn-warning  mx-2"
        >
          засах
        </button>
        <Form open={open} closeForm={closeForm} />
        <button className="  btn btn-error ">устгах</button>
      </td>
    </tr>
  );
};

export default TRow;
