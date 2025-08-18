import { Link } from "react-router";

const NavLinks = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <Link to="/about" className="hover:text-primary">
        About Us
      </Link>
      <Link to="/contact" className="hover:text-primary">
        Contact
      </Link>
      <Link to="/premium" className="hover:text-primary">
        Premium
      </Link>
    </div>
  );
};

export default NavLinks;
