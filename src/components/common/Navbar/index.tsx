import Image from 'next/image';
import SearchBar from './SearchBar';
import MenuBar from './MenuBar';

export default function NavBar() {
  return (
    <nav className="h-[183px]">
      <div className="my-3 flex items-center justify-between lg:pl-[87px]">
        <div className="relative ml-4 h-20 w-20 lg:h-[131px] lg:w-[156px]">
          <Image layout="fill" src="/affling-logo.svg" alt="Affling Logo" />
        </div>
        <div className="hidden w-full max-w-4xl sm:block">
          <SearchBar />
        </div>
        <button className="rounded-[20px] bg-gradient-to-r  from-[#217CD9] via-[#218fd9e8] to-[#21C1D9] font-bold  text-white">
          Sign Up
        </button>
      </div>
      <div className="w-full bg-gradient-to-r from-[#217CD9] via-[#218fd9e8] to-[#21C1D9] py-2 font-bold text-white">
        <MenuBar />
      </div>
      <div className="w-full max-w-4xl py-1 sm:hidden">
        <SearchBar />
      </div>
    </nav>
  );
}
