const AuthButtons = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <button className="border-1 border-[#62d962] py-1 px-6 rounded-md text-[#62d962] hover:drop-shadow-[1px_0_8px_#EE10B0] hover:scale-90 cursor-pointer transition-all ease-in-out">
        Login
      </button>
      <button className="border-none outline-none bg-[#62d962] py-1 px-6 rounded-md cursor-pointer hover:scale-95 transition-all ease-in-out">
        Sign Up
      </button>
    </div>
  );
};

export default AuthButtons;
