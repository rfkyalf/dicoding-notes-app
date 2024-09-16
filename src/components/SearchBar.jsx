export default function SearchBar({ searchTerm, setSearchTerm }) {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="my-4">
      <h1 className="text-2xl text-neutral-950 font-bold my-4">Cari Catatan</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        className="mt-1 block w-full border border-neutral-300 rounded-md p-2"
        placeholder="Search..."
      />
    </div>
  );
}
