import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Search() {
  const { searchContent } = useContext(AppContext);
  const { handleChange } = useContext(AppContext);
  const { handleSearchClick } = useContext(AppContext);

  return (
    <div>
      <div className="pt-28 px-4 items-center md:pt-32">
        <FaSearch
          size={17}
          className="cursor-pointer absolute mt-[29px] ml-10 duration-500 opacity-50 dark:text-white dark:opacity-100 dark:duration-500 md:mt-[21px] md:ml-7 md:opacity-30"
          onClick={handleSearchClick}
        />
        <input
          style={{
            fontSize: "17px",
          }}
          type="text"
          placeholder="Search for any country..."
          onChange={handleChange}
          value={searchContent}
          className="px-20 shadow-md shadow-slate-200 dark:shadow-slate-900 duration-500 w-full rounded-md p-6 dark:bg-slate-800 dark:text-white dark:duration-500 placeholder:font-sans dark:placeholder:text-white dark:placeholder:opacity-90 focus:outline-none md:w-96 md:p-4 md:px-16"
        />
      </div>
    </div>
  );
}
