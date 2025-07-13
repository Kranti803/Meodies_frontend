import { Link } from "react-router";

const NavLinks = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <Link to="/" className="hover:text-[#EE10B0]">
        About Us
      </Link>
      <Link to="/" className="hover:text-[#EE10B0]">
        Contact
      </Link>
      <Link to="/" className="hover:text-[#EE10B0]">
        Premium
      </Link>
    </div>
  );
};

export default NavLinks;
