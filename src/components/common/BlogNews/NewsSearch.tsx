export default function NewsSearch() {
  return (
    <div className="mb-12 rounded-3xl bg-[#EFF5FF] p-4">
      <div className="px-8 py-10">
        <label htmlFor="search" className="text-2xl font-bold text-[#313131]">
          Search
        </label>
        <div className="mt-4">
          <input
            className="h-[50px] w-[420px] rounded-2xl px-4"
            id="search"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}
