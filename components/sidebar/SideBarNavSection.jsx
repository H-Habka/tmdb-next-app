import React from "react";
import SideBarItem from "./SideBarItem";

const SideBarNavSection = ({ childrenItems }) => {
    return (
        <div className="border-t-2 border-gray-400 first:border-t-0 py-2  ">
            {childrenItems.map((navItem) => (
                <div>
                    <SideBarItem
                        {...navItem}
                    />
                </div>
            ))}
        </div>
    );
};

export default SideBarNavSection;
