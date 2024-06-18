import { useContext } from "react";
import { AppContext } from "../App";

export default function CountryDetails() {
  const { searchData } = useContext(AppContext);
  const { clickDetails } = useContext(AppContext);

  return (
    <div>
      <div className="px-4 pt-10 md:w-96 ml-1 pb-5 md:px-8 md:pb-5 md:ml-32 md:mt-7">
        {searchData && searchData[0] && (
          <>
            {clickDetails && (
              <div className="md:border-transparent md:bg-transparent border border-white bg-white duration-500 shadow-md shadow-slate-200 dark:border-slate-800 dark:shadow-slate-900 rounded-md dark:bg-slate-800 dark:text-white dark:duration-500 md:h-10">
                <div className="md:flex flex-row">
                  <div>
                    <img
                      src={searchData[0].flags.png}
                      alt={searchData[0].flags.alt}
                      className="w-full rounded-tr-md rounded-tl-md md:mr-80 md:h-19"
                    />
                  </div>
                  <div className="p-7 md:mt-[-40px] md:ml-[200px]">
                    <div className="pb-7">
                      <span
                        // style={{
                        //   fontSize: "25px",
                        // }}
                        className="font-bold font-sans text-big md:text-2xl"
                      >
                        {searchData[0].name.common}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-20">
                      <div className="md:flex flex-col md:gap-5">
                        <div className="flex flex-row gap-2 mb-4 md:mb-0 md:items-center">
                          <h3 className="font-bold font-sans text-average md:text-medium">
                            Languages:
                          </h3>{" "}
                          <span className="md:text-smaller">
                            {Object.values(searchData[0].languages).join(", ")}
                          </span>{" "}
                        </div>
                        <div className="flex flex-row gap-2 mb-4 md:mb-0 md:items-center">
                          <h3 className="font-bold font-sans text-average md:text-medium md:text-nowrap">
                            Sub Region:
                          </h3>
                          <span className="md:text-smaller md:text-nowrap">
                            {searchData[0].subregion}
                          </span>
                        </div>
                        <div className="flex flex-row gap-2 mb-4 md:mb-0 md:items-center">
                          <h3 className="font-bold font-sans text-average md:text-medium">
                            Top Level Domain:{" "}
                          </h3>
                          <span className="md:text-smaller">
                            {searchData[0].tld[0]}
                          </span>
                        </div>
                        <div className="flex flex-row gap-2 mb-4 md:mb-0 items-center">
                          <h3 className="font-bold font-sans text-average md:text-medium md:text-nowrap">
                            Native name:{" "}
                          </h3>

                          <span className="md:text-smaller md:text-nowrap">
                            {Object.keys(searchData[0].name.nativeName).map(
                              (code) => (
                                <span key={code}>
                                  {searchData[0].name.nativeName[code].official}{" "}
                                </span>
                              )
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="md:flex flex-col">
                        <div className="flex flex-row gap-2 mb-4 md:mb-0 md:items-center">
                          <h3 className="font-bold font-sans text-average md:text-medium">
                            Currencies:
                          </h3>
                          <span className="md:text-smaller md:text-nowrap">
                            {Object.values(searchData[0].currencies)
                              .map((currency) => currency.name)
                              .join(", ")}
                          </span>
                        </div>
                        <div className="md:flex flex-row md:items-center md:mt-[15px]">
                          <div className="flex flex-row gap-2 mb-4 md:mb-0 md:justify-center md:items-center">
                            <h3 className="font-bold font-sans text-average md:text-medium">
                              Population:{" "}
                            </h3>
                            <span className="md:text-smaller">
                              {searchData[0].population.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        <div className="md:flex flex-row md:items-center md:mt-[20px]">
                          <div className="flex flex-row gap-2 mb-4 md:mb-0 md:justify-center md:items-center">
                            <h3 className="font-bold font-sans text-average md:text-medium">
                              Region:{" "}
                            </h3>
                            <span className="md:text-smaller md:mr-11">
                              {searchData[0].region}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center md:text-nowrap md:pt-6">
                      <h3 className="font-bold font-sans text-average md:text-medium">
                        Borders:{" "}
                      </h3>
                      {searchData[0].borders && (
                        <span className="md:text-smaller">
                          {Object.keys(searchData[0].borders).map((code) => (
                            <span key={code}>
                              {searchData[0].borders[code] ? (
                                <span className="md:border md:border-transparent md:bg-transparent md:shadow-sm md:shadow-slate-300 md:p-2 md:ml-2 md:text-nowrap dark:shadow-none dark:bg-slate-800">
                                  {searchData[0].borders[code]}
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
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
