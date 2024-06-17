import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Region() {
  //passing required props through context api technique.
  const { countries } = useContext(AppContext);
  const { regionDetailsClicked } = useContext(AppContext);
  const { regionDetails } = useContext(AppContext);

  return (
    <div>
      <div>
        {!regionDetails && (
          <div>
            {countries.length >= 0 ? (
              <div className="pb-5 md:flex md:flex-row flex-wrap md:justify-between md:px-20 md:ml-[25px]">
                {countries.map((country, index) => (
                  <div
                    key={country.cca3}
                    className="px-4 pt-10 w-96 ml-1 md:px-8 md:pb-5"
                  >
                    <Link to={`/country/${country.name.common}`}>
                      <div
                        onClick={regionDetailsClicked}
                        className="border border-white bg-white shadow-md shadow-slate-200 duration-500 rounded-md dark:border-slate-800 dark:shadow-slate-900 dark:bg-slate-800 dark:text-white dark:duration-500 md:w-60 md:h-full"
                      >
                        <img
                          src={country.flags.png}
                          alt={country.flags.alt}
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
                              {country.name.common}
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
                                {country.population.toLocaleString()}
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
                                {country.continents.join(", ")}
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
                                {country.capital
                                  ? country.capital.join(", ")
                                  : "N/A"}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div>No countries found!</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
