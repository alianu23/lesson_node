import React, { useEffect, useState } from "react";

import UserList from "@/components/UserList";
import Form from "@/components/Form";
import Toast from "@/components/Toast";

export default function Home() {
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
    <main className="container mx-auto">
      <h1 className="text-center text-2xl font-bold my-4">
        Хэрэглэгчийн жагсаалт
      </h1>
      <div className=" m-5 flex justify-center">
        <button
          className="btn btn-primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          Шинэ хэрэглэгч нэмэх
        </button>
      </div>
      <Form open={open} closeForm={closeForm} />
      <UserList users={userList} />
    </main>
  );
}
