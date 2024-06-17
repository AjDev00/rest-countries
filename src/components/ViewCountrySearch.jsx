import { useContext, useState } from "react";
import { AppContext } from "../App";

export default function ViewCountrySearch() {
  //passing required props through context api technique.
  const { searchData } = useContext(AppContext);

  return (
    <div>
      <div>
        {searchData && searchData[0] && (
          <>
            <img
              src={searchData[0].flags.png}
              alt={searchData[0].flags.alt}
              className="w-full rounded-tr-md rounded-tl-md md:h-60 md:pb-4"
            />
            <div className="p-7">
              <div className="pb-7">
                <span
                  // style={{
                  //   fontSize: "25px",
                  // }}
                  className="font-bold font-sans text-big md:text-small"
                >
                  {searchData[0].name.common}
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
                    {searchData[0].population.toLocaleString()}
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
                    {searchData[0].continents}
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
                    {searchData[0].capital}
                  </span>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
