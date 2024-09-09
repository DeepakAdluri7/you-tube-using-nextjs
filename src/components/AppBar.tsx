import { SearchBar } from "./SearchBar";

export function AppBar() {

    return <div className="flex justify-between">
        <div className="text-md inline-flex items-center ml-10 text-xl text-bold">Youtube</div>
        <div><SearchBar></SearchBar></div>
        <div className="text-md inline-flex items-center mr-10 text-xl text-bold">Sign In</div>

    </div>

}