import SearchBar from './SearchBar';

export default function NavBar() {
  return (
    <nav className="h-[186px] outline">
      <div className="flex">
        <div>LOGO</div>
        <div>
          <SearchBar />
        </div>
        <div className="h-[63.267px] w-[186px]">
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
