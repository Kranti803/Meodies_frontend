import { useState } from "react";
import { useLoginUserMutation } from "../services/authApi";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { setTempUserEmail, setUser } from "../features/auth/authSlice";
import { Link, Navigate, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { isLoading }] = useLoginUserMutation();
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await loginUser(formData).unwrap();
      dispatch(setUser(result?.user));
      toast.success(result?.message);
      navigate("/");
    } catch (error: any) {
      toast.error(error?.data?.message);
      dispatch(setTempUserEmail(formData.email));
      if (error.status === 403) navigate("/verify_email");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:4500/auth/google";
  };

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary text-white px-4 font-primary">
      <div className="bg-bgDark w-full max-w-md rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-primary">Welcome Back</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
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
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <div className="text-right mt-1">
              <Link
                to="/forgotpassword"
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full grid place-items-center bg-primary hover:bg-primary transition py-2 rounded-lg font-semibold"
          >
            {isLoading ? <Spinner /> : "Login"}
          </button>
        </form>

        <div className="text-center text-gray-500">or</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-600 hover:bg-[#2c2c2c] transition py-2 rounded-lg"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span>Continue with Google</span>
        </button>

        <p className="text-sm text-gray-400 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
