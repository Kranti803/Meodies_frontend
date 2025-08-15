import userIcon from "../assets/unnamed.png";
const UserProfile = ({name}:{name:string}) => {
  return (
    <div className="hidden md:flex justify-center items-center gap-x-2">
      <img src={userIcon} alt="" className="w-12 h-12 rounded-full" />
      <p className="text-[#62d962] font-semibold">{name}</p>
    </div>
  );
};

export default UserProfile;
