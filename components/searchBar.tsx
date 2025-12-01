"use client";

import { IconSearch } from "@tabler/icons-react";
import { form } from "motion/react-client";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto relative">
      <IconSearch className="absolute mx-3 mt-2 text-gray-600" />
      <input
        type="text"
        placeholder="Cari Makanan Anda Disini..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border rounded-lg text-black focus:outline-none focus:border-red-700"
      />
    </form>
  );
}
