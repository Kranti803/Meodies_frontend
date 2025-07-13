import { Link } from "react-router";

const NavLinks = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <Link to="/about" className="hover:text-[#62d962]">
        About Us
      </Link>
      <Link to="/contact" className="hover:text-[#62d962]">
        Contact
      </Link>
      <Link to="/premium" className="hover:text-[#62d962]">
        Premium
      </Link>
    </div>
  );
};

export default NavLinks;
