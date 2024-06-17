import { useContext } from "react";
import { AppContext } from "../App";
import Region from "./Region";
import ViewCountrySearch from "./ViewCountrySearch";
import CountryDetails from "./CountryDetails";

export default function CountryView() {
  const {
    searchLoading,
    searchError,
    searchClicked,
    selectedRegion,
    handleClickDetails,
    clickDetails,
  } = useContext(AppContext);

  if (searchClicked && searchError) {
    return (
      <h3 className="font-bold text-center pt-10 font-serif text-2xl pb-56 h-screen">
        {searchError}
      </h3>
    );
  }

  if (searchLoading) {
    return (
      <div className="font-bold pt-14 text-center h-screen animate-pulse duration-500 font-serif pb-56 md:h-screen md:pt-40 md:ml-20">
        Loading...
      </div>
    );
  }

  if (clickDetails && !selectedRegion) {
    return <CountryDetails />;
  }

  return (
    <div className="px-4 pt-10 w-96 ml-1 pb-5 md:px-96 md:ml-36">
      {selectedRegion && !searchClicked && !clickDetails ? (
        <Region />
      ) : (
        <div
          onClick={handleClickDetails}
          className="border border-white bg-white shadow-md duration-500 shadow-slate-200 rounded-md dark:border-slate-800 dark:shadow-slate-900 dark:bg-slate-800 dark:text-white dark:duration-500 md:w-80"
        >
          {searchClicked && <ViewCountrySearch />}
          {/* {searchClicked ? (
            <ViewCountrySearch />
          ) : (
            <div>{clickDetails && !selectedRegion && <CountryDetails />}</div>
          )} */}
        </div>
      )}
    </div>
  );
}
