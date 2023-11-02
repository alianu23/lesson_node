import UserInfoTable from "@/components/UserInfoTable";

export default function Home() {
  return (
    <div className="flex flex-col content-center items-center">
      <h1 className="my-4 text-xl font-bold ">User Information</h1>
      <UserInfoTable />
    </div>
  );
}
