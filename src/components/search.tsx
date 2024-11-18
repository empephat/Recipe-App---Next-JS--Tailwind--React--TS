import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBox() {
  return (
    <div className="relative max-w-2xl mx-auto">
      <Input
        type="search"
        placeholder="Search..."
        className="w-full py-2 px-4 pr-10 text-emerald-900 bg-white 
                   border-emerald-300 hover:border-emerald-400
                   focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50
                   rounded-full transition-all duration-200 ease-in-out
                   placeholder-emerald-400 hover:placeholder-emerald-500"
        aria-label="Search"
      />
      <Search
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-700
                   transition-colors duration-200 ease-in-out
                   group-hover:text-emerald-800"
        size={20}
        aria-hidden="true"
      />
    </div>
  );
}
