import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const SearchInput = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    if (searchText !== "") {
      navigate(`/result/${searchText}`);
      setSearchText('')
    }
  };

  return (
    <div className="bg-bgDark flex gap-x-2 py-1 px-3 rounded-md">
      <button onClick={handleClick} className="text-primary">
        <Search size={18} />
      </button>
      <div>
        <input
          type="text"
          placeholder="Search for songs..."
          className="border-none outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && searchText !== "") {
              navigate(`/result/${searchText}`);
              setSearchText('')
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchInput;
