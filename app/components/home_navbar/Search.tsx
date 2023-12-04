"use client";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="
    border-[1px]
    border-slate-800
    w-full
    md:w-auto
    py-2
    rounded-full
    shadow-sm
    hover:shadow-md
    transition
    cursor-pointer"
    >
      <div
        className="
        flex
        flex-row
        items-center
        justify-between"
      >
        <div
          className="
            text-sm
            font-semibold
            text-slate-400
            px-6"
        >
          Anywhere
        </div>
        <div
          className="
            hidden
            sm:block
            text-sm
            text-slate-400
            font-semibold
            px-6
            border-x-[1px]
            flex-1
            text-center"
        >
          Any Week
        </div>
        <div
          className="text-sm
            pl-6
            pr-2
            text-slate-500
            flex
            flex-row
            items-center
            gap-3"
        >
          <div
            className="
                hidden sm:block"
          >
            Add Guests
          </div>
          <div
            className="
                p-2
                bg-rose-500
                rounded-full
                text-white"
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;