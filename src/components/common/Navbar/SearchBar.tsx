import { HiSearch } from 'react-icons/hi';
export default function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="Search by Network, Offers..." />
      <button className="flex items-center">
        <HiSearch />
        Search
      </button>
    </div>
  );
}
