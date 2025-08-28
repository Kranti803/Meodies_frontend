import { useState } from "react";
import { useRegisterUserMutation } from "../services/authApi";
import { toast } from "react-toastify";
import { Link, Navigate, useNavigate } from "react-router";
import Spinner from "../components/Spinner";
import { useAppSelector } from "../store/hooks";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const { user } = useAppSelector((state) => state.auth);
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

   const handleGoogleLogin = () => {
    window.location.href = "https://melodies-backend-6.onrender.com/auth/google";
  };

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary text-white px-4 font-primary">
      <div className="bg-bgDark max-w-md w-full rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-primary">Create Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full grid place-items-center bg-primary hover:bg-primary transition py-2 rounded-lg font-semibold"
          >
            {isLoading ? <Spinner /> : "Sign Up"}
          </button>
        </form>

        <div className="text-center text-gray-500">or</div>

        <button 
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-2 border border-gray-600 hover:bg-[#2c2c2c] transition py-2 rounded-lg">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span>Continue with Google</span>
        </button>

        <p className="text-sm text-gray-400 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
