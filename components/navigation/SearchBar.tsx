import { Search as SearchIcon } from "lucide-react"

const SearchBar = () => {
    return (
        <div className="relative flex items-center gap-2 ">
            <input 
                className="rounded-md border px-2 py-1 "
                type="text" 
                placeholder="Search..."
            />
            <SearchIcon 
                className="absolute right-2 hover:cursor-pointer"
                size={20}
            />
        </div>
    )
}

export default SearchBar;
