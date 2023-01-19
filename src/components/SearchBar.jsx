'use client';

import { useRef } from 'react';

const SearchBar = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form action="submit" onSubmit={handleSubmit} className="px-3 py-2">
      <div className="flex items-center gap-2">
        <input
          type="search"
          ref={inputRef}
          placeholder="Search for shows & movies..."
          className="flex-1 border-slate-900 px-3 py-2 shadow-sm placeholder:text-slate-300"
        />
        <button
          type="submit"
          className="border border-slate-900 px-3 py-2 shadow-sm hover:bg-slate-100"
        >
          search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
