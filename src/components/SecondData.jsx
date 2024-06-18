import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function SecondData() {
  //passing required props through context api technique.
  const { loading } = useContext(AppContext);
  const { secondData } = useContext(AppContext);

  return (
    <div>
      <div>
        <div className="px-4 pt-10 md:w-96 ml-1 md:ml-[-180px] md:px-28">
          {loading ? (
            <p className="font-bold animate-pulse duration-500 font-serif">
              Loading...
            </p>
          ) : (
            <Link to="/second-data-details">
              <div className="border border-white bg-white duration-500 shadow-md shadow-slate-200 dark:border-slate-800 dark:shadow-slate-900 rounded-md dark:bg-slate-800 dark:text-white dark:duration-500 md:w-60">
                {secondData && secondData[0] && (
                  <>
                    <img
                      src={secondData[0].flags.png}
                      alt={secondData[0].flags.alt}
                      className="w-full rounded-tr-md rounded-tl-md md:h-40 md:pb-4"
                    />
                    <div className="p-7 md:p-4 md:mb-[15px]">
                      <div className="pb-7 md:pb-5">
                        <span
                          // style={{
                          //   fontSize: "25px",
                          // }}
                          className="font-bold font-sans text-big md:text-small"
                        >
                          {secondData[0].name.common}
                        </span>
                      </div>
                      <ul className="flex flex-col gap-5">
                        <li>
                          <span
                            // style={{
                            //   fontSize: "17px",
                            // }}
                            className="font-bold font-sans text-average md:text-medium"
                          >
                            Population:
                          </span>{" "}
                          <span className="md:text-smaller">
                            {secondData[0].population.toLocaleString()}
                          </span>
                        </li>
                        <li>
                          <span
                            // style={{
                            //   fontSize: "17px",
                            //   fontFamily: "",
                            // }}
                            className="font-bold font-sans text-average md:text-medium"
                          >
                            Continents:
                          </span>{" "}
                          <span className="md:text-smaller">
                            {secondData[0].continents}
                          </span>
                        </li>
                        <li>
                          <span
                            style={{
                              fontSize: "17px",
                            }}
                            className="font-bold font-sans pb-10 text-average md:text-medium"
                          >
                            Capital:
                          </span>{" "}
                          <span className="md:text-smaller">
                            {secondData[0].capital}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
