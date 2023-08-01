import Image from 'next/image';
import SearchBar from './SearchBar';
import MenuBar from './MenuBar';

export default function NavBar() {
  return (
    <nav className="h-[186px] outline">
      <div className="flex items-center justify-evenly">
        <Image
          width={156}
          height={131}
          src="/affling-logo.svg"
          alt="Affling Logo"
        />
        <div>
          <SearchBar />
        </div>
        <button className="h-[63.27px] rounded-[20px] bg-blue-500 bg-gradient-to-r from-[#217CD9] via-[#218fd9e8] to-[#21C1D9] px-[35px] py-[10px] text-center text-[26px] font-bold text-white">
          Sign Up
        </button>
      </div>
      <div>
        <MenuBar />
      </div>
    </nav>
  );
}
