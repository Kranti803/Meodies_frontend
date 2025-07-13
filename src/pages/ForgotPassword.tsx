const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181818] text-white px-4">
      <div className="bg-[#1f1f1f] w-full max-w-md rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-[#62d962] text-center">Forgot Password</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62d962]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#62d962] hover:bg-[#58c558] transition py-2 rounded-md font-semibold"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center">
          Back to{" "}
          <a href="/login" className="text-[#62d962] hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
