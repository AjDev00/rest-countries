// import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Header() {
  const { clicked } = useContext(AppContext);
  const { handleClick } = useContext(AppContext);

  return (
    <div>
      <div className="flex flex-row justify-between items-center px-4 border border-white bg-white duration-500 shadow-md shadow-slate-1000 dark:shadow-slate-900 dark:border-slate-900 p-6 fixed w-full z-10 dark:bg-slate-800 dark:text-white dark:duration-500 md:px-20">
        <div
          style={{
            fontSize: "17px",
          }}
          className="font-bold font-sans"
        >
          Where in the world ?
        </div>
        <div
          onClick={handleClick}
          className="flex flex-row items-center gap-3 font-sans"
        >
          {clicked ? (
            <FaSun className="cursor-default" />
          ) : (
            <FaMoon size={17} className="cursor-default " />
          )}
          <span
            style={{
              fontSize: "16px",
            }}
          >
            {clicked ? (
              <div className="cursor-default">Light Mode</div>
            ) : (
              <div className="cursor-default">Dark Mode</div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
