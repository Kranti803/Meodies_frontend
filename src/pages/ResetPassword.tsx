import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppSelector } from "../store/hooks";
import { useResetPasswordMutation } from "../services/authApi";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { resetToken } = useParams();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!resetToken) {
      toast.error("Invalid or missing reset token.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const result = await resetPassword({ resetToken, newPassword }).unwrap();
      toast.success(result.message);
      navigate("/passwordsuccess");
    } catch (error: any) {
      toast.error(error?.data?.message);
      console.log(error)
    }
  };
  useEffect(() => {
    if (user) navigate("/");
  }, [user]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181818] text-white px-4">
      <div className="bg-[#1f1f1f] w-full max-w-md rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-[#62d962] text-center">
          Reset Password
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">New Password</label>
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62d962]"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Confirm New Password</label>
            <input
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62d962]"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full grid place-items-center bg-[#62d962] hover:bg-[#58c558] transition py-2 rounded-md font-semibold"
          >
            {isLoading ? <Spinner /> : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
