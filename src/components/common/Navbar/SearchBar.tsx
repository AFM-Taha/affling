import { HiSearch } from 'react-icons/hi';
export default function SearchBar() {
  return (
    <form className="rounded-full mx-3 lg:mx-0 my-1 lg:my-0 bg-gradient-to-r from-[#217CD9] via-[#218fd9e8] to-[#21C1D9] p-[3px]">
      <div className="flex">
        <button className="rounded-l-full border-r-[3px] border-r-[#217CD9] bg-white px-4 py-2 lg:py-4 sm:px-11">
          All
        </button>
        <div className="relative w-full">
          <input
            className="z-20 block h-full w-full rounded-r-full pl-4 text-black"
            placeholder="Search by Network, Offers..."
            required
          />
          <button
            type="submit"
            className="absolute right-0 top-0 flex h-full items-center gap-2 rounded-r-full bg-gradient-to-r from-[#217CD9] via-[#218fd9e8] to-[#21C1D9] p-2.5 text-sm font-bold text-white sm:px-7 ">
            <HiSearch className="text-lg"/> Search
          </button>
        </div>
      </div>
    </form>
  );
}
