import { Search } from "lucide-react";

export default function SearchBox() {
  return (
    <div className="max-w-2xl mx-auto relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full py-2 px-4 pr-10 rounded-full border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <Search
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400"
        size={20}
      />
    </div>
  );
}
