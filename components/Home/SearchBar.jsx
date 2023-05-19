import { useState } from "react";

import { icon } from "@/assets/icon";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-between pt-3 px-3.5 items-center">
      <icon.backArrow className="mr-2" />
      <div className="basis-[90%] px-3 relative">
        <icon.search className="absolute top-1.5 ml-2 text-gray-700" />
        <input
          type="text"
          value={search}
          onChange={({ target: { value } }) => setSearch(value)}
          className="w-full bg-gray-100 rounded-full pl-9 py-0.5"
          placeholder="Search Twitter Clone"
        />
      </div>
      <icon.options className="ml-2" />
    </div>
  );
};

export default SearchBar;
