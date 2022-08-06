import { sidebarItems } from "../../data/sidebarData";
import SideBarNavSection from "./SideBarNavSection";

const SideBarNavigations = () => {
    return (
        <div className="pr-2 overflow-scroll h-full scrollbar-thumb-gray-400 scrollbar-thin hover:scrollbar-thumb-gray-500">
            {sidebarItems.map((section) => (
                <SideBarNavSection
                    key={section.id}
                    childrenItems={section.childrenItems}
                />
            ))}
        </div>
    );
};

export default SideBarNavigations;
