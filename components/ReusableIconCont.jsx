const ReusableIconCont = ({ primaryIcom, SecandaryIcon, isActive , onClick}) => {
    return (
        <div className="border-2 dark:border-none rounded-full p-1 cursor-pointer active:bg-gray-300" onClick={onClick}>
            {isActive ? SecandaryIcon : primaryIcom}
        </div>
    );
};

export default ReusableIconCont;
