import React from "react";

const QuickSideBarItem = ({ ActiveIcon, NormalIcon, title, id, href }) => {
    const isActive = false;
    return (
        <div className="w-20 h-20 flex flex-col items-center justify-center hover:bg-gray-300">
            <div>{isActive ?ActiveIcon  : NormalIcon}</div>
            <div>{title}</div>
        </div>
    );
};

export default QuickSideBarItem;
