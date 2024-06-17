import { Fragment, useState, useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { AppContext } from "../App";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FilterSearch() {
  //passing required props through context api technique.
  const { setRegionError } = useContext(AppContext);
  const { setRegionLoading } = useContext(AppContext);
  const { setSelectedRegion } = useContext(AppContext);
  const { selectedRegion } = useContext(AppContext);
  const { setCountries } = useContext(AppContext);
  const { regions } = useContext(AppContext);
  const { setSearchContent } = useContext(AppContext);
  const { countries } = useContext(AppContext);

  //get value of the region.
  function getButtonValue(e) {
    e.preventDefault();
    const region = e.target.value;
    setSelectedRegion(region);
    console.log(region);
    setSearchContent("");
    setCountries(countries);
  }

  //fetch selected regions.
  useEffect(() => {
    async function filterByRegion(region) {
      //exit if no region is selected.
      if (!region) {
        return;
      }

      try {
        setRegionLoading(true);
        setRegionError("");
        const res = await fetch(
          `https://restcountries.com/v3.1/region/${region}`
        );

        if (!res.ok) {
          throw new Error("Error fetching data!");
        }
        const data = await res.json();
        console.log(data);
        setCountries(data);
        setRegionLoading(false);
      } catch {
        setRegionError("Unable to fetch data! 😢");
        setRegionLoading(false);
      }
    }

    filterByRegion(selectedRegion); //the value of region must be rendered here.
  }, [selectedRegion]);

  return (
    <div className="px-4 pt-12 md:pt-32">
      <Menu as="div">
        <div>
          <MenuButton
            style={{
              fontSize: "17px",
            }}
            className="inline-flex justify-between rounded-md bg-white duration-500 p-6 w-56
           text-md font-semibold shadow-md shadow-slate-200 dark:shadow-slate-900 dark:bg-slate-800 dark:text-white dark:duration-500 md:w-48 md:p-4 md:font-normal"
          >
            Filter by Region
            <ChevronDownIcon className="pt-1 h-5 w-5" aria-hidden="true" />
          </MenuButton>
        </div>

        {/* customized tailwind transition dropdowns. */}
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-100 z-10 mt-2 w-56 md:w-48 rounded-md bg-white shadow-md shadow-slate-200 dark:shadow-slate-900 dark:bg-slate-800 dark:text-white">
            <div className="py-1">
              <MenuItem as="div">
                {regions.map((region, index) => (
                  <button
                    key={region.id}
                    style={{
                      fontSize: "18px",
                    }}
                    className="block px-6 py-4 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer duration-300 w-full text-left"
                    value={region.region}
                    onClick={getButtonValue}
                  >
                    {region.region}
                  </button>
                ))}
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
