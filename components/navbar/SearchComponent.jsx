import { BiSearch } from "react-icons/bi";
import { FaMicrophone } from "react-icons/fa";
import ReusableIconCont from "../ReusableIconCont";

const SearchComponent = () => {
    return (
        <div className="flex items-center gap-2 ">
            <div className="flex items-center md:border-2 pr-2 dark:border-1 dark:border-gray-900 ">
                <input
                    className="hidden md:block pl-2 p-1 font-bold outline-none h-full text-xl xl:text-2xl border-r-2 dark:bg-black dark:border-gray-900"
                    placeholder="Search"
                />
                <BiSearch size={36} className="  h-full pl-2 cursor-pointer" />
            </div>
            <ReusableIconCont primaryIcom={<FaMicrophone size={24} />} />
        </div>
    );
};

export default SearchComponent;
