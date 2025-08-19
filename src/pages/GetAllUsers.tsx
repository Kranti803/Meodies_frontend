import { useState } from "react";
import { Trash } from "lucide-react";
interface User {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
}

const initialUsers: User[] = [
  { _id: "1", name: "Alice", email: "alice@example.com", role: "user" },
  { _id: "2", name: "Bob", email: "bob@example.com", role: "admin" },
  { _id: "3", name: "Charlie", email: "charlie@example.com", role: "user" },
];

const GetAllUsers = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const deleteUser = (id: string) => {
    // TODO: Replace with API call
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user._id !== id));
      // call API to delete user here
    }
  };

  const toggleRole = (id: string) => {
    // TODO: Replace with API call
    setUsers((prev) =>
      prev.map((user) =>
        user._id === id
          ? { ...user, role: user.role === "user" ? "admin" : "user" }
          : user
      )
    );
    // call API to update role here
  };

  return (
    <div className="min-h-screen bg-[#181818] text-white p-8">
      <h1 className="text-3xl font-bold text-[#62d962] mb-6">All Users</h1>

      <div className="overflow-x-auto rounded-xl shadow bg-[#2a2a2a] p-6">
        <table className="w-full table-auto border-collapse border border-gray-700">
          <thead>
            <tr className="bg-[#1f1f1f] text-gray-400">
              <th className="border border-gray-700 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-700 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-700 px-4 py-2 text-left">
                Role
              </th>
              <th className="border border-gray-700 px-4 py-2 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="odd:bg-[#323232] even:bg-[#2a2a2a]">
                <td className="border border-gray-700 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-700 px-4 py-2 capitalize">
                  {user.role}
                </td>
                <td className="border border-gray-700 px-4 py-2 space-x-2">
                  <button
                    onClick={() => toggleRole(user._id)}
                    className="bg-[#62d962] text-black px-3 py-1 rounded hover:bg-green-500 transition"
                  >
                    Change role
                  </button>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="bg-red-600 px-3 py-2 rounded hover:bg-red-700 transition"
                  >
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllUsers;
