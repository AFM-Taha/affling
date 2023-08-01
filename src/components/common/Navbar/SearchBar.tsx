import { HiSearch } from 'react-icons/hi';
export default function SearchBar() {
  return (
    <form className="rounded-full bg-gradient-to-r from-[#217CD9] via-[#218fd9e8] to-[#21C1D9] p-[3px]">
      <div className="flex">
        <button className="rounded-l-full bg-white  px-4">All</button>
        <div className="relative w-full">
          <input
            className="z-20 block w-full rounded-r-full p-2.5 text-sm text-black"
            placeholder="Search by Network, Offers..."
            required
          />
          <button
            type="submit"
            className="absolute right-0 top-0 flex h-full items-center gap-2 rounded-r-full bg-blue-700 p-2.5 text-sm font-medium text-white">
            <HiSearch /> Search
          </button>
        </div>
      </div>
    </form>
  );
}
