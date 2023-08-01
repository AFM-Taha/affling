import Image from 'next/image';
import SearchBar from './SearchBar';
import MenuBar from './MenuBar';

export default function NavBar() {
  return (
    <nav className="h-[183px]">
      <div className="my-3 flex items-center justify-between pl-[87px]">
        <Image
          width={156}
          height={131}
          src="/affling-logo.svg"
          alt="Affling Logo"
        />
        <div className="w-full max-w-4xl">
          <SearchBar />
        </div>
        <button className="h-[63.27px] mr-[50px] rounded-[20px] bg-gradient-to-r from-[#217CD9] via-[#218fd9e8] to-[#21C1D9] px-[35px] py-[10px] text-center text-[26px] font-bold text-white">
          Sign Up
        </button>
      </div>
      <div className="w-full bg-gradient-to-r from-[#217CD9] via-[#218fd9e8] to-[#21C1D9] py-2 font-bold text-white">
        <MenuBar />
      </div>
    </nav>
  );
}
