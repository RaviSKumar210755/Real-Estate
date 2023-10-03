import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    // <div className="bg-slate-100 p-3 rounded-lg flex items-center w-1/2">
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       placeholder="Search..."
    //       className="bg-transparent focus:outline-none w-24 sm:w-64"
    //       value={searchTerm}
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //     />
    //     <button>
    //       <FaSearch className="text-slate-600" />
    //     </button>
    //   </form>
    // </div>

    // <div className="bg-slate-400 p-3 rounded-lg flex items-center w-1/2">
    //   <form onSubmit={handleSubmit} className="flex items-center w-full">
    //     <input
    //       type="text"
    //       placeholder="Search..."
    //       className="bg-transparent focus:outline-none flex-grow text-slate-700"
    //       value={searchTerm}
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //     />
    //     <button>
    //       <FaSearch className="text-slate-700" />
    //     </button>
    //   </form>
    // </div>

    <div className="bg-slate-300 p-3 rounded-lg flex items-center w-1/2">
      <form onSubmit={handleSubmit} className="flex items-center w-full">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none flex-grow text-slate-700" // Keep text-slate-700 for text color
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>
          <FaSearch className="text-slate-700" />
        </button>
      </form>
    </div>
  );
}
