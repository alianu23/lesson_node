import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import UserList from "@/components/UserList";
import Form from "@/components/Form";
import Toast from "@/components/Toast";

const MySwal = withReactContent(Swal);

export default function Home() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const closeForm = () => {
    console.log("Formee");
    setOpen(false);
    setSelectedUser(null);
  };

  const getAllUser = async () => {
    const { users } = await fetch("http://localhost:8008/api/users").then(
      (res) => res.json()
    );
    console.log("Хэрэглэгчдийн мэдээллийг татлаа.", users);

    setUserList(users);
  };

  const handleUpdater = async (userId) => {
    console.log("ID", userId);
    setOpen(true);
    const updateUser = userList.filter((user) => user.id === userId);
    console.log(userId, updateUser);
    setSelectedUser(updateUser[0]);
  };

  const handleDelete = (userId) => {
    Swal.fire({
      title: "Устгахдаа итгэлтэй байна уу?",
      showDenyButton: true,
      confirmButtonText: "Тийм",
      denyButtonText: `Үгүй`,
    }).then(async (result) => {
      console.log("res", result);
      if (result.isConfirmed) {
        await fetch("http://localhost:8008/api/users/" + userId, {
          method: "DELETE",
        });
        MySwal.fire({
          title: "Амжилттай устгагдлаа",
          icon: "success",
          timer: 2500,
          showConfirmButton: false,
        }).then((r) => setRefresh(!refresh));
      }
    });
  };

  useEffect(() => {
    getAllUser();
  }, [refresh]);

  return (
    <main className={``}>
      <h1 className="text-center text-2xl font-bold my-4">
        Хэрэглэгчийн жагсаалт
      </h1>
      <div className=" m-5 flex justify-end">
        <button
          className="btn btn-primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          Шинэ хэрэглэгч нэмэх
        </button>
      </div>
      <Form
        open={open}
        closeForm={closeForm}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      <UserList
        users={userList}
        handleUpdater={handleUpdater}
        handleDelete={handleDelete}
      />
    </main>
  );
}
