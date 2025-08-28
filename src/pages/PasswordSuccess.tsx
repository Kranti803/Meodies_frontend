const PasswordSuccess = () => {
  return (
    <div className="min-h-screen flex font-primary items-center justify-center bg-secondary text-white px-4">
      <div className="bg-bgDark w-full max-w-md rounded-2xl shadow-lg p-10 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-primary">🎉 Password Changed!</h2>
        <p className="text-gray-400">
          Your password has been successfully updated. You can now log in with your new credentials.
        </p>
        <a
          href="/login"
          className="inline-block bg-primary text-white px-6 py-2 rounded-md font-semibold"
        >
          Go to Login
        </a>
      </div>
    </div>
  );
};

export default PasswordSuccess;
