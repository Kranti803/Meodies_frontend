import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router";
import { useForgotPasswordMutation } from "../services/authApi";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { user } = useAppSelector((state) => state.auth);
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await forgotPassword({ email }).unwrap();
      toast.success(result?.message);
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);
  return (
    <div className="min-h-screen font-primary flex items-center justify-center bg-black text-white px-4">
      <div className="bg-[#1f1f1f] w-full max-w-md rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-primary text-center">
          Forgot Password
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-bgDark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary py-2 rounded-md font-semibold"
          >
            {isLoading ? <Spinner /> : "Send Reset Link"}
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center">
          Back to{" "}
          <a href="/login" className="text-primary hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
