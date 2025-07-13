const PasswordSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181818] text-white px-4">
      <div className="bg-[#1f1f1f] w-full max-w-md rounded-2xl shadow-lg p-10 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-[#62d962]">🎉 Password Changed!</h2>
        <p className="text-gray-400">
          Your password has been successfully updated. You can now log in with your new credentials.
        </p>
        <a
          href="/login"
          className="inline-block bg-[#62d962] hover:bg-[#58c558] transition px-6 py-2 rounded-md font-semibold text-black"
        >
          Go to Login
        </a>
      </div>
    </div>
  );
};

export default PasswordSuccess;
