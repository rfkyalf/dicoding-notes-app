import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <nav className="flex justify-between items-center py-6 border-b border-neutral-500">
      <h1 className="text-[35px] font-bold text-neutral-50">NotesApp.</h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          className="bg-transparent border border-neutral-800 pl-10 py-2 rounded-lg placeholder-neutral-600"
        />
        <IoSearch className="absolute top-[10px] left-[10px] text-[20px] text-neutral-600" />
      </div>
    </nav>
  );
}
