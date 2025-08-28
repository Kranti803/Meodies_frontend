import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { useConfirmEmailVerificationQuery } from "../services/authApi";

const EmailVerificationStatus = () => {
  const { token, userId } = useParams<{ token: string; userId: string }>();
  const navigate = useNavigate();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  // it will Only call the query if userId and token exist
  const { data, isLoading, isError } = useConfirmEmailVerificationQuery(
    { userId: userId || "", token: token || "" },
    { skip: !userId || !token } // skip query if params are missing
  );

  useEffect(() => {
    if (isLoading) {
      setStatus("loading");
    } else if (data?.success) {
      setStatus("success");
      toast.success(data.message || "Email verified successfully!");
      setTimeout(() => navigate("/login"), 3000); // auto-redirect after 3s
    } else if (isError || !data?.success) {
      setStatus("error");
    }
  }, [isLoading, isError, data, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181818] text-white px-4">
      <div className="bg-[#1f1f1f] w-full max-w-md rounded-2xl shadow-lg p-8 space-y-6 text-center">
        {status === "loading" && (
          <>
            <h2 className="text-3xl font-bold text-primary">
              Verifying Your Email...
            </h2>
            <p className="text-gray-300">Please wait a moment.</p>
          </>
        )}

        {status === "success" && (
          <>
            <h2 className="text-3xl font-bold text-primary">Email Verified!</h2>
            <p className="text-gray-300">
              Your email has been successfully verified.
              <br />
              Redirecting to login...
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
              alt="Success"
              className="w-24 h-24 mx-auto mt-4"
            />
          </>
        )}

        {status === "error" && (
          <>
            <h2 className="text-3xl font-bold text-red-500">Verification Failed</h2>
            <p className="text-gray-300">
              Unable to verify your email. The link may have expired or is invalid.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="inline-block mt-4 bg-primary hover:bg-primary/90 transition py-2 px-6 rounded-lg font-semibold"
            >
              Go to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailVerificationStatus;
