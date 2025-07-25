import { Link } from "react-router";
const EmailVerification = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181818] text-white px-4">
      <div className="bg-[#1f1f1f] w-full max-w-md rounded-2xl shadow-lg p-8 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-[#62d962]">Verify Your Email</h2>
        <p className="text-gray-300">
          We have sent a verification link to your email address.
          <br />
          Please check your inbox and verify your email to continue using your account.
        </p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
          alt="Email sent"
          className="w-24 h-24 mx-auto mt-4"
        />

        <p className="text-gray-400 text-sm">
          Didn’t receive the email? Check your spam folder or{" "}
          <button className="text-[#62d962] hover:underline">
            Resend Verification
          </button>
        </p>

        <Link
          to="/login"
          className="inline-block mt-4 bg-[#62d962] hover:bg-[#62d962]/90 transition py-2 px-6 rounded-lg font-semibold"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default EmailVerification;
