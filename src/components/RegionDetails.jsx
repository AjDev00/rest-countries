import { useHistory, useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import { BiArrowBack } from "react-icons/bi";

export default function CountryDetails() {
  const history = useHistory();
  const { countryName } = useParams();
  const { countries } = useContext(AppContext);
  const { searchLoading } = useContext(AppContext);
  const { clickDetails } = useContext(AppContext);
  const { searchClicked } = useContext(AppContext);
  const { setRegionDetails } = useContext(AppContext);
  const { hideRegionDetails } = useContext(AppContext);

  const country = countries.find(
    (country) => country.name.common.toLowerCase() === countryName.toLowerCase()
  );

  function goBack() {
    history.go(-1);
    setRegionDetails(false);
  }

  if (!country && !searchLoading && !searchClicked) {
    return (
      <div className="md:items-center md:justify-center md:text-2xl font-bold font-serif pt-20 md:ml-[550px] ml-28">
        Country not found!
      </div>
    );
  }

  return (
    <div className="px-4 pt-10 w-80 ml-1 pb-5 md:px-20 md:pb-0 md:ml-12">
      {!searchLoading && !searchClicked && (
        <>
          <div>
            <div
              onClick={goBack}
              className="md:ml-[-50px] md:mb-10 cursor-pointer flex flex-row gap-3 border w-24 justify-between items-center px-4 p-1 mb-5 border-white bg-white duration-500 shadow-md shadow-slate-400 dark:border-slate-800 dark:shadow-slate-900 dark:bg-slate-800 dark:text-white dark:duration-500"
            >
              <button>
                <BiArrowBack size={10} />
              </button>
              <p>Back</p>
            </div>
            <div className="dark:md:border-transparent md:bg-transparent border border-white bg-white duration-500 shadow-md shadow-slate-200 dark:border-slate-800 dark:shadow-slate-900 rounded-md dark:bg-slate-800 dark:text-white dark:duration-500 md:h-10">
              {country && country && (
                <div className="md:flex flex-row">
                  <div>
                    <img
                      src={country.flags.png}
                      alt={country.flags.alt}
                      className="w-full rounded-tr-md rounded-tl-md md:mr-80 md:h-60"
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
                        {country.name.common}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-0">
                      <div className="md:flex flex-col md:gap-5">
                        <div className="flex flex-row gap-2 mb-4 md:mb-0 md:items-center">
                          <h3 className="font-bold font-sans text-average md:text-medium">
                            Languages:
                          </h3>{" "}
                          <span className="md:text-smaller">
                            {Object.values(country.languages).join(", ")}
                          </span>{" "}
                        </div>
                        <div className="flex flex-row gap-2 mb-4 md:mb-0 md:items-center">
                          <h3 className="font-bold font-sans text-average md:text-medium md:text-nowrap">
                            Sub Region:
                          </h3>
                          <span className="md:text-smaller md:text-nowrap">
                            {country.subregion}
                          </span>
                        </div>
                        <div className="flex flex-row gap-2 mb-4 md:mb-0 md:items-center">
                          <h3 className="font-bold font-sans text-average md:text-medium">
                            Top Level Domain:{" "}
                          </h3>
                          <span className="md:text-smaller">
                            {country.tld[0]}
                          </span>
                        </div>
                        <div className="flex flex-row gap-2 mb-4 md:mb-0 items-center">
                          <h3 className="font-bold font-sans text-average md:text-medium md:text-nowrap">
                            Native name:{" "}
                          </h3>

                          <span className="md:text-smaller md:text-nowrap">
                            {Object.keys(country.name.nativeName).map(
                              (code) => (
                                <span key={code}>
                                  {country.name.nativeName[code].official}{" "}
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
                            {Object.values(country.currencies)
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
                              {country.population.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        <div className="md:flex flex-row md:items-center md:mt-[20px]">
                          <div className="flex flex-row gap-2 mb-4 md:mb-0 md:justify-center md:items-center">
                            <h3 className="font-bold font-sans text-average md:text-medium">
                              Region:{" "}
                            </h3>
                            <span className="md:text-smaller md:mr-11">
                              {country.region}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center md:text-nowrap md:pt-6">
                      <h3 className="font-bold font-sans text-average md:text-medium">
                        Borders:{" "}
                      </h3>
                      {country.borders && (
                        <span className="md:text-smaller">
                          {Object.keys(country.borders).map((code) => (
                            <span key={code}>
                              {country.borders[code] ? (
                                <span className="md:border md:border-transparent md:bg-transparent md:shadow-sm md:shadow-slate-300 md:p-2 md:ml-2 md:text-nowrap dark:shadow-none dark:bg-slate-800">
                                  {country.borders[code]}
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
