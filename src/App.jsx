import "./App.css";
import CountryView from "./components/CountryView";
import Header from "./components/Header";
import Home from "./components/Home";
import { createContext, useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import RegionDetails from "./components/RegionDetails";

export const AppContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //first home data.
  const [firstData, setFirstData] = useState({}); //state variable to store the Germany's API data.
  const countryFirstName = "Germany"; //variable to store the first country display name.

  //fetch first home display data.
  useEffect(() => {
    async function getFirstCountry() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryFirstName}`
        );
        if (!res.ok) {
          throw new Error("Error fetching data! ");
        }
        const data = await res.json();
        console.log(data);
        setFirstData(data);
        setLoading(false);
      } catch {
        setError(error.message);
        setLoading(false);
      }
    }

    getFirstCountry();
  }, []);

  //second home data.
  const [secondData, setSecondData] = useState({});
  const countrySecondName = "United States of America"; //variable to store the second country display.

  //fetch second home display data.
  useEffect(() => {
    async function getSecondCountry() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countrySecondName}`
        );
        if (!res.ok) {
          throw new Error("Error fetching data! ");
        }
        const data = await res.json();
        console.log(data);
        setSecondData(data);
        setLoading(false);
      } catch {
        setError(error.message);
        setLoading(false);
      }
    }

    getSecondCountry();
  }, []);

  //third home data.
  const [thirdData, setThirdData] = useState({});
  const countryThirdName = "Brazil"; //variable to store the third country display.

  //fetch third home display data.
  useEffect(() => {
    async function getThirdCountry() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryThirdName}`
        );
        if (!res.ok) {
          throw new Error("Error fetching data! ");
        }
        const data = await res.json();
        console.log(data);
        setThirdData(data);
        setLoading(false);
      } catch {
        setError(error.message);
        setLoading(false);
      }
    }

    getThirdCountry();
  }, []);

  //fourth home display.
  const [fourthData, setFourthData] = useState({});
  const countryFourthName = "Iceland"; //variable to store the fourth country display.

  //fetch fourth home display data.
  useEffect(() => {
    async function getFourthCountry() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryFourthName}`
        );
        if (!res.ok) {
          throw new Error("Error fetching data! ");
        }
        const data = await res.json();
        console.log(data);
        setFourthData(data);
        setLoading(false);
      } catch {
        setError(error.message);
        setLoading(false);
      }
    }

    getFourthCountry();
  }, []);

  //fifth home display.
  const [fifthData, setFifthData] = useState({});
  const countryFifthName = "Afghanistan"; //variable to store the fifth country display.

  //fetch fifth home display data.
  useEffect(() => {
    async function getFifthCountry() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryFifthName}`
        );
        if (!res.ok) {
          throw new Error("Error fetching data! ");
        }
        const data = await res.json();
        console.log(data);
        setFifthData(data);
        setLoading(false);
      } catch {
        setError(error.message);
        setLoading(false);
      }
    }

    getFifthCountry();
  }, []);

  //sixth home display.
  const [sixthData, setSixthData] = useState({});
  const countrySixthName = "Mexico"; //variable to store the sixth country display.

  //fetch sixth home display data.
  useEffect(() => {
    async function getSixthCountry() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countrySixthName}`
        );
        if (!res.ok) {
          throw new Error("Error fetching data! ");
        }
        const data = await res.json();
        console.log(data);
        setSixthData(data);
        setLoading(false);
      } catch {
        setError(error.message);
        setLoading(false);
      }
    }

    getSixthCountry();
  }, []);

  //seventh home display.
  const [seventhData, setSeventhData] = useState({});
  const countrySeventhName = "Albania"; //variable to store the seventh country display.

  //fetch seventh display data.
  useEffect(() => {
    async function getSeventhCountry() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countrySeventhName}`
        );
        if (!res.ok) {
          throw new Error("Error fetching data! ");
        }
        const data = await res.json();
        console.log(data);
        setSeventhData(data);
        setLoading(false);
      } catch {
        setError(error.message);
        setLoading(false);
      }
    }

    getSeventhCountry();
  }, []);

  //last home display.
  const [lastData, setLastData] = useState({});
  const countryLastName = "Algeria"; //variable to store the last country display.

  //fetch last display data.
  useEffect(() => {
    async function getCountry() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryLastName}`
        );
        if (!res.ok) {
          throw new Error("Error fetching data! ");
        }
        const data = await res.json();
        console.log(data);
        setLastData(data);
        setLoading(false);
      } catch {
        setError(error.message);
        setLoading(false);
      }
    }

    getCountry();
  }, []);

  //search params.
  const [searchContent, setSearchContent] = useState("");
  const [searchError, setSearchError] = useState("");
  const [searchData, setSearchData] = useState("");
  const [searchLoading, setSearchLoading] = useState(null);
  const [searchClicked, setSearchClicked] = useState(0);

  //search functions.
  function handleSearchClick() {
    setSearchClicked((searchClicked) => searchClicked + 1);
    console.log(searchClicked);
    setClickDetails(false);
    // setCountries("");
  }

  function handleChange(e) {
    e.preventDefault();
    setSearchContent(e.target.value);
    setSearchError("");
    setSearchLoading(true);

    // setRegionLoading(true);
  }

  //get search content.
  useEffect(() => {
    async function getSearchedCountry() {
      setSearchLoading(true);
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${searchContent}`
        );

        if (!res.ok) {
          throw new Error("Error fetching data!");
        }

        const data = await res.json();
        console.log(data);
        setSearchData(data);
        setSearchLoading(false);
      } catch {
        setSearchError("Unable to fetch! 😢");
        console.log(searchError);
        setSearchLoading(false);
      }
    }

    getSearchedCountry();
  }, [searchClicked]);

  //region(filter search) params.
  const regions = [
    {
      id: "1",
      region: "Africa",
    },
    {
      id: "2",
      region: "America",
    },
    {
      id: "3",
      region: "Asia",
    },
    {
      id: "4",
      region: "Europe",
    },
    {
      id: "5",
      region: "Oceania",
    },
  ];

  //region setting params.
  const [regionError, setRegionError] = useState("");
  const [regionLoading, setRegionLoading] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [regionDetails, setRegionDetails] = useState(false);
  const [hideRegionDetails, setHideRegionDetails] = useState(false);
  //state variable to hold the list of countries in a region.
  const [countries, setCountries] = useState([]);
  //function to make sure only one region details display at a time.
  function regionDetailsClicked() {
    setRegionDetails(true);
  }

  function handleHideRegionDetails() {
    setHideRegionDetails(true);
  }

  //toggle light and dark mode params.
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  useEffect(() => {
    console.log(`Dark mode is now ${clicked ? "enabled" : "disabled"}`);
    if (clicked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [clicked]);

  //country&region details params.
  const [clickDetails, setClickDetails] = useState(false);

  function handleClickDetails() {
    setClickDetails(true);
    setSearchClicked(null);
    setSelectedRegion("");
    setHideRegionDetails(true);
    console.log(clickDetails);
  }

  return (
    <div className="App dark:bg-slate-900 dark:text-white dark:duration-500 duration-300">
      <AppContext.Provider
        value={{
          handleChange,
          searchContent,
          loading,
          setLoading,
          error,
          setError,
          handleSearchClick,
          searchData,
          searchLoading,
          searchError,
          searchClicked,
          regions,
          regionError,
          setRegionError,
          regionLoading,
          setRegionLoading,
          selectedRegion,
          setSelectedRegion,
          countries,
          setCountries,
          clicked,
          setClicked,
          handleClick,
          setSearchContent,
          clickDetails,
          handleClickDetails,
          firstData,
          secondData,
          thirdData,
          fourthData,
          fifthData,
          sixthData,
          seventhData,
          lastData,
          regionDetailsClicked,
          regionDetails,
          setRegionDetails,
          setHideRegionDetails,
          hideRegionDetails,
          handleHideRegionDetails,
        }}
      >
        <Router>
          <Header />
          <SearchBar />
          <Switch>
            <Route exact path="/home" component={Home} />
            {countries && (
              <Route
                exact
                path="/country/:countryName"
                component={RegionDetails}
              />
            )}
          </Switch>
          {searchContent ? (
            <div>
              <CountryView />
            </div>
          ) : (
            <div>
              <Home />
            </div>
          )}
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
