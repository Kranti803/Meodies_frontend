import { Link, useNavigate } from "react-router";
import { useResendEmailVerificationLinkMutation } from "../services/authApi";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { removeTempUserEmail } from "../features/auth/authSlice";
import { useEffect } from "react";
import Spinner from "../components/Spinner";

const EmailVerification = () => {
  const [resendEmailVerificationLink, { isLoading }] =
    useResendEmailVerificationLinkMutation();
  const { tempUserEmail, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleResendVerification = async () => {
    try {
      if (!tempUserEmail)
        return toast.error("No email found to resend verification.");
      const result = await resendEmailVerificationLink({
        email: tempUserEmail,
      }).unwrap();
      toast.success(result?.message);
      dispatch(removeTempUserEmail());
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };
  useEffect(() => {
    if (user) navigate("/");
  }, [user]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181818] text-white px-4">
      <div className="bg-[#1f1f1f] w-full max-w-md rounded-2xl shadow-lg p-8 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-primary">Verify Your Email</h2>
        <p className="text-gray-300">
          We have sent a verification link to your email address.
          <br />
          Please check your inbox and verify your email to continue using your
          account.
        </p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/561/561127.png "
          alt="Email sent"
          className="w-24 h-24 mx-auto mt-4 filter invert"
        />

        <p className="text-gray-400 text-sm flex flex-col justify-center items-center">
          Didn’t receive the email? Check your spam folder or{" "}
          <button
            onClick={handleResendVerification}
            className="text-primary hover:underline"
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : "Resend Verification"}
          </button>
        </p>

        <Link
          to="/login"
          className="inline-block mt-4 bg-primary hover:bg-primary/90 transition py-2 px-6 rounded-lg font-semibold"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default EmailVerification;
