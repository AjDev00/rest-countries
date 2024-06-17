import FilterSearch from "./FilterSearch";
import Search from "./Search";

export default function SearchBar() {
  return (
    <div className="flex flex-col md:flex md:flex-row md:px-16 md:justify-between">
      <Search />
      <FilterSearch />
    </div>
  );
}
