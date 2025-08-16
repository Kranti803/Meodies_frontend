import userIcon from "../assets/userPic.png";
import { useAppSelector } from "../store/hooks";
const UserProfile = ({ name }: { name: string }) => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div className="hidden md:flex justify-center items-center gap-x-2">
      <img
        src={user?.photoURL || userIcon}
        alt=""
        className="w-12 h-12 rounded-full"
        referrerPolicy="no-referrer"
      />
      <p className="text-[#62d962] font-semibold">{name}</p>
    </div>
  );
};

export default UserProfile;
