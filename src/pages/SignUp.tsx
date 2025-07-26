import { useState } from "react";
import { useRegisterUserMutation } from "../services/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Spinner from "../components/Spinner";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await registerUser(formData).unwrap(); //mutation hooks returns promise
      toast.success(result?.message);
      navigate("/verify_email");
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181818] text-white px-4">
      <div className="bg-[#1f1f1f] max-w-md w-full rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-[#62d962]">Create Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62d962]"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62d962]"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="•••••••"
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62d962]"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full grid place-items-center bg-[#62d962] hover:bg-[#62d962] transition py-2 rounded-lg font-semibold"
          >
            {isLoading ? <Spinner /> : "Sign Up"}
          </button>
        </form>

        <div className="text-center text-gray-500">or</div>

        <button className="w-full flex items-center justify-center gap-2 border border-gray-600 hover:bg-[#2c2c2c] transition py-2 rounded-lg">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span>Continue with Google</span>
        </button>

        <p className="text-sm text-gray-400 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-[#62d962] hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
