import { Trash } from "lucide-react";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useToggleUserRoleMutation,
} from "../services/adminApi";
import { toast } from "react-toastify";

const GetAllUsers = () => {
  const { data, refetch } = useGetAllUsersQuery();
  const [toggleUserRole, { isLoading }] = useToggleUserRoleMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleDeleteUser = async(id: string) => {
    console.log(id);
     try {
      const result = await deleteUser({ userId: id }).unwrap();
      await refetch();
      toast.success(result?.message);
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  const toggleRole = async (id: string) => {
    try {
      const result = await toggleUserRole({ userId: id }).unwrap();
      await refetch();
      toast.success(result?.message);
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className="min-h-screen bg-inherit font-primary text-white p-8">
      <h1 className="text-3xl font-bold text-primary mb-6">All Users</h1>

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
            {data?.users.map((user) => (
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
                    disabled={isLoading}
                    onClick={() => toggleRole(user._id)}
                    className="bg-primary px-3 py-1 rounded hover:bg-primary text-white transition"
                  >
                    {isLoading ? "Changing..." : "Change role"}
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
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
