import SideBarHeader from "./SideBarHeader";
import SideBarNavigations from "./SideBarNavigations";
import { toggleVisibility } from "../../redux/features/generalSlice";
import {useDispatch} from 'react-redux'

const SideBar = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div className="brightness-50 w-screen h-screen opacity-60 z-40 bg-black absolute" onClick={() => dispatch(toggleVisibility())}></div>
            <div className="z-50 bg-white dark:bg-darkMode dark:text-white  overflow-hidden h-screen w-fit border-r-2 dark:border-none border-gray-600  flex flex-col absolute pt-2">
                <SideBarHeader />
                <SideBarNavigations />
            </div>
        </>
    );
};

export default SideBar;
