import { fetchUserAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUserCard from "@/components/single-user-card";

async function UserManagement() {
  const getListOfUsers = await fetchUserAction();
  console.log(getListOfUsers);

  return (
    <div className="p-6 ">
      <div className="flex justify-between">
        <h1>User Management</h1>
        <AddNewUser />
      </div>
      <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {getListOfUsers &&
        getListOfUsers.data &&
        getListOfUsers.data.length > 0 ? (
          getListOfUsers.data.map((userItem) => (
            <SingleUserCard key={userItem._id} user={userItem} />
          ))
        ) : (
          <h3>No users found! Please create one</h3>
        )}
      </div>
    </div>
  );
}

export default UserManagement;
