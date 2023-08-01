import { HiSearch } from 'react-icons/hi';
export default function SearchBar() {
  return (
    <form className="rounded-full bg-gradient-to-r from-[#217CD9] via-[#218fd9e8] to-[#21C1D9] p-[3px]">
      <div className="flex">
        <button className="rounded-l-full border-r-[3px] border-r-[#217CD9] bg-white px-11 py-4">
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
            className="absolute right-0 top-0 flex h-full items-center gap-2 rounded-r-full bg-gradient-to-r from-[#217CD9] via-[#218fd9e8] to-[#21C1D9] p-2.5 px-7 text-[26px] font-bold text-white">
            <HiSearch /> Search
          </button>
        </div>
      </div>
    </form>
  );
}
