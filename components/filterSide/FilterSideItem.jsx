const FilterSideItem = ({ title }) => {
    return (
        <li className="cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-300  dark:bg-gray-900  border px-3 py-2 w-fit whitespace-nowrap rounded-3xl ">
            {title}
        </li>
    );
};

export default FilterSideItem;
