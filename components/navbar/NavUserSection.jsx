import { AiOutlineBell, AiFillBell } from "react-icons/ai";
import { BsFillCameraVideoFill, BsCameraVideo } from "react-icons/bs";
import ReusableIconCont from "../ReusableIconCont";
import Image from "next/image";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowMode } from "../../redux/features/generalSlice";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const NavUserSection = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.generalSlice.isDarkMode);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="flex gap-4 items-center relative xsm:static justify-between ml-2 ">
            <div
                className={`-left-3 top-3/4 absolute xsm:static xsm:flex-row xsm:gap-4 items-center justify-between xsm:border-none xsm:flex ${
                    isVisible ? "flex flex-col gap-1 pl-1 bg-white dark:gap-3 dark:bg-darkModeMain" : "hidden"
                }`}
            >
                <ReusableIconCont
                    primaryIcom={<BsSun size={24} />}
                    SecandaryIcon={<BsFillMoonFill size={24} />}
                    isActive={isDarkMode}
                    onClick={() => dispatch(toggleShowMode())}
                />
                <ReusableIconCont
                    primaryIcom={<BsCameraVideo size={24} />}
                    SecandaryIcon={<BsFillCameraVideoFill size={24} />}
                    isActive={false}
                />
                <ReusableIconCont
                    primaryIcom={<AiOutlineBell size={24} />}
                    SecandaryIcon={<AiFillBell size={24} />}
                    isActive={false}
                />
            </div>
            <div className="block xsm:hidden">
                <IoIosArrowDown
                    onClick={() =>
                        setIsVisible((currentState) => !currentState)
                    }
                />
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
                <Image
                    src="/images/profile.jpg"
                    alt="profile"
                    width={32}
                    height={32}
                />
            </div>
        </div>
    );
};

export default NavUserSection;
