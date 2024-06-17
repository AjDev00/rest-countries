import { useContext, useEffect, useState } from "react";
import FirstData from "./FirstData";
import SecondData from "./SecondData";
import ThirdData from "./ThirdData";
import FourthData from "./FourthData";
import FifthData from "./FifthData";
import { AppContext } from "../App";
import SixthData from "./SixthData";
import SeventhData from "./SeventhData";
import LastData from "./LastData";
import Region from "./Region";
import FirstDataDetails from "./FirstDataDetails";
import SecondDataDetails from "./SecondDataDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import ThirdDataDetails from "./ThirdDataDetails";
import FourthDataDetails from "./FourthDataDetails";
import FifthDataDetails from "./FifthDataDetails";
import SixthDataDetails from "./SixthDataDetails";
import SeventhDataDetails from "./SeventhDataDetails";
import LastDataDetails from "./LastDataDetails";

export default function Home() {
  //passing required props through context api technique.
  const { regionError } = useContext(AppContext);
  const { regionLoading } = useContext(AppContext);
  const { selectedRegion } = useContext(AppContext);

  return (
    <div className="md:dark:bg-slate-900 md:h-screen">
      {regionLoading && (
        <div className="font-bold pt-20 text-center animate-pulse duration-500 font-serif">
          Loading...
        </div>
      )}
      {regionError && (
        <div className="text-center font-bold mt-10">{regionError}</div>
      )}
      {!regionLoading && !regionError && selectedRegion ? (
        <div className="md:dark:bg-slate-900">
          <Region />
        </div>
      ) : (
        <div className="flex flex-col md:flex md:flex-row flex-wrap md:absolute md:left-10 md:justify-between md:dark:bg-slate-900">
          <Router>
            <Switch>
              <Route exact path="/">
                <FirstData />
                <SecondData />
                <ThirdData />
                <FourthData />
                <FifthData />
                <SixthData />
                <SeventhData />
                <LastData />
              </Route>

              <Route path="/firstdata-details">
                <div>
                  <FirstDataDetails />
                </div>
              </Route>

              <Route path="/second-data-details">
                <SecondDataDetails />
              </Route>

              <Route path="/third-data-details">
                <ThirdDataDetails />
              </Route>

              <Route path="/fourthdata-details">
                <FourthDataDetails />
              </Route>

              <Route path="/fifthdata-details">
                <FifthDataDetails />
              </Route>

              <Route path="/sixthdata-details">
                <SixthDataDetails />
              </Route>

              <Route path="/seventhdata-details">
                <SeventhDataDetails />
              </Route>

              <Route path="/lastdata-details">
                <LastDataDetails />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}
