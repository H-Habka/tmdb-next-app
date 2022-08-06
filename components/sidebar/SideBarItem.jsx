import Link from "next/link";

const SideBarItem = ({ ActiveIcon, NormalIcon, title, id, href }) => {
    const isActive = false;
    return (
        <Link href="/">
            <a
                className={`flex justify-start gap-2 pl-3 py-2 font-bold ${
                    isActive ? "bg-gray-300" : ""
                } hover:bg-gray-300`}
            >
                {isActive ? ActiveIcon : NormalIcon}
                <div className="flex-1">{title}</div>
            </a>
        </Link>
    );
};

export default SideBarItem;
