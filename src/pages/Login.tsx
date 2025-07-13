const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181818] text-white px-4">
      <div className="bg-[#1f1f1f] w-full max-w-md rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-[#62d962]">Welcome Back</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62d962]"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62d962]"
            />
            <div className="text-right mt-1">
              <a
                href="/forgot-password"
                className="text-sm text-[#62d962] hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#62d962] hover:bg-[#58c558] transition py-2 rounded-lg font-semibold"
          >
            Login
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
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#62d962] hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
