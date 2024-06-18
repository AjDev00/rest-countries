import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function LastDataDetails() {
  const { lastData } = useContext(AppContext);
  const history = useHistory();

  function goBack() {
    history.go(-1);
  }

  return (
    <div className="px-4 pt-10 md:w-96 ml-1 pb-5 md:px-8 md:pb-0">
      {lastData && lastData[0] && (
        <>
          <div>
            <div
              onClick={goBack}
              className="cursor-pointer flex flex-row gap-3 border w-24 justify-between items-center px-4 p-1 mb-5 border-white bg-white duration-500 shadow-md shadow-slate-400 dark:border-slate-800 dark:shadow-slate-900 dark:bg-slate-800 dark:text-white dark:duration-500"
            >
              <button>
                <BiArrowBack size={10} />
              </button>
              <p>Back</p>
            </div>
            <div className="md:border-transparent md:bg-transparent border border-white bg-white duration-500 shadow-md shadow-slate-200 dark:border-slate-800 dark:shadow-slate-900 rounded-md dark:bg-slate-800 dark:text-white dark:duration-500 md:h-10">
              {lastData && lastData[0] && (
                <div className="md:flex flex-row">
                  <div>
                    <img
                      src={lastData[0].flags.png}
                      alt={lastData[0].flags.alt}
                      className="w-full rounded-tr-md rounded-tl-md md:mr-80 md:h-60"
                    />
                  </div>
                  <div className="p-7 md:mt-[-40px] md:ml-80">
                    <div className="pb-7">
                      <span
                        // style={{
                        //   fontSize: "25px",
                        // }}
                        className="font-bold font-sans text-big md:text-2xl"
                      >
                        {lastData[0].name.common}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-0">
                      <div className="md:flex flex-col md:gap-5">
                        <div className="flex flex-row gap-2 mb-4 md:mb-0 md:justify-center md:items-center">
                          <h3 className="font-bold font-sans text-average md:text-medium md:ml-[-170px]">
                            Languages:
                          </h3>{" "}
                          <span className="md:text-smaller">
                            {Object.values(lastData[0].languages)}
                          </span>{" "}
                        </div>
                        <div className="flex flex-row gap-2 mb-4 md:mb-0 md:justify-center md:items-center">
                          <h3 className="font-bold font-sans text-average md:text-medium md:text-nowrap md:ml-[-120px]">
                            Sub Region:
                          </h3>
                          <span className="md:text-smaller md:text-nowrap">
                            {lastData[0].subregion}
                          </span>
                        </div>
                        <div className="flex flex-row gap-2 mb-4 md:mb-0 md:justify-center md:items-center">
                          <h3 className="font-bold font-sans text-average md:text-medium md:ml-[-143px]">
                            Top Level Domain:{" "}
                          </h3>
                          <span className="md:text-smaller">
                            {lastData[0].tld[0]}
                          </span>
                        </div>
                        <div className="flex flex-row gap-2 mb-4 md:mb-0 items-center">
                          <h3 className="font-bold font-sans text-average md:text-medium md:text-nowrap">
                            Native name:{" "}
                          </h3>
                          <span className="md:text-smaller md:text-nowrap">
                            {Object.keys(lastData[0].name.nativeName).map(
                              (code) => (
                                <span key={code}>
                                  {lastData[0].name.nativeName[code].official}{" "}
                                </span>
                              )
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="md:flex flex-col">
                        <div className="flex flex-row gap-2 mb-4 md:mb-0 md:justify-center md:items-center md:ml-[50px]">
                          <h3 className="font-bold font-sans text-average md:text-medium">
                            Currencies:
                          </h3>
                          <span className="md:text-smaller md:text-nowrap">
                            {Object.keys(lastData[0].currencies).map((code) => (
                              <span key={code} className="">
                                {lastData[0].currencies[code].name}
                              </span>
                            ))}
                          </span>
                        </div>
                        <div className="md:flex flex-row md:justify-center md:items-center md:ml-[40px] md:mt-[15px]">
                          <div className="flex flex-row gap-2 mb-4 md:mb-0 md:justify-center md:items-center">
                            <h3 className="font-bold font-sans text-average md:text-medium">
                              Population:{" "}
                            </h3>
                            <span className="md:text-smaller">
                              {lastData[0].population.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        <div className="md:flex flex-row md:justify-center md:items-center md:ml-[30px] md:mt-[20px]">
                          <div className="flex flex-row gap-2 mb-4 md:mb-0 md:justify-center md:items-center">
                            <h3 className="font-bold font-sans text-average md:text-medium">
                              Region:{" "}
                            </h3>
                            <span className="md:text-smaller md:mr-11">
                              {lastData[0].region}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center md:text-nowrap md:pt-6">
                      <h3 className="font-bold font-sans text-average md:text-medium">
                        Borders:{" "}
                      </h3>
                      {lastData[0].borders && (
                        <span className="md:text-smaller">
                          {Object.keys(lastData[0].borders).map((code) => (
                            <span key={code}>
                              {lastData[0].borders[code] ? (
                                <span className="md:border md:border-transparent md:bg-transparent md:shadow-sm md:shadow-slate-300 md:p-2 md:ml-2 md:text-nowrap dark:shadow-none dark:bg-slate-800">
                                  {lastData[0].borders[code]}
                                </span>
                              ) : (
                                "No border countries."
                              )}{" "}
                            </span>
                          ))}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
