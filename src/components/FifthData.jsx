import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function FifthData() {
  //passing required props through context api technique.
  const { loading } = useContext(AppContext);
  const { fifthData } = useContext(AppContext);

  return (
    <div>
      <div>
        <div className="px-4 pt-10 md:w-96 ml-1 md:px-8">
          {loading ? (
            <p className="font-bold animate-pulse duration-500 font-serif">
              Loading...
            </p>
          ) : (
            <Link to="/fifthdata-details">
              <div className="border border-white bg-white duration-500 shadow-md shadow-slate-200 rounded-md dark:border-slate-800 dark:shadow-slate-900 dark:bg-slate-800 dark:text-white dark:duration-500 md:w-60 md:h-full">
                {fifthData && fifthData[0] && (
                  <>
                    <img
                      src={fifthData[0].flags.png}
                      alt={fifthData[0].flags.alt}
                      className="w-full rounded-tr-md rounded-tl-md md:h-40 md:pb-4"
                    />
                    <div className="p-7 md:p-4 md:mb-[8px]">
                      <div className="pb-7">
                        <span
                          // style={{
                          //   fontSize: "25px",
                          // }}
                          className="font-bold font-sans text-big md:text-small"
                        >
                          {fifthData[0].name.common}
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
                            {fifthData[0].population.toLocaleString()}
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
                            {fifthData[0].continents}
                          </span>
                        </li>
                        <li>
                          <span
                            // style={{
                            //   fontSize: "17px",
                            // }}
                            className="font-bold font-sans pb-10 text-average md:text-medium"
                          >
                            Capital:
                          </span>{" "}
                          <span className="md:text-smaller">
                            {fifthData[0].capital}
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
