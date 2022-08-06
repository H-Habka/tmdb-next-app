import { BiMenu } from "react-icons/bi";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisibility } from "../../redux/features/generalSlice";
import ReusableIconCont from "../ReusableIconCont";
import { useMediaQuery } from "react-responsive";

const SideBarHeader = ({ inNavBar }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 480px)",
    });
    const dispatch = useDispatch();
    const isDarkMode = useSelector(state => state.generalSlice.isDarkMode)
    return (
        <div className="ml-4 flex justify-center items-center gap-2">
            <ReusableIconCont
                primaryIcom={
                    <BiMenu
                        size={30}
                        className=" cursor-pointer"
                        onClick={() => dispatch(toggleVisibility())}
                    />
                }
            />
            {!isDesktopOrLaptop && inNavBar ? (
                <Image
                    src={`/images/youtube-logo2.png`}
                    alt="logo"
                    width={70}
                    height={40}
                />
            ) : (
                <Image
                    src={`${isDarkMode? "/images/youtube-logo-dark.jpg" : "/images/youtube-logo.jpg"}`}
                    alt="logo"
                    width={150}
                    height={50}
                />
            )}
        </div>
    );
};

export default SideBarHeader;
