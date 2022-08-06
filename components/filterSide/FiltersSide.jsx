import FilterSideItem from "./FilterSideItem"
import { filters } from "../../data/filterSideData"

const FiltersSide = () => {
  return (
    <ul className="md:ml-20 border-y p-4 flex gap-4 overflow-scroll scrollbar-none ">
      {filters.map((filter,idx) => (
        <FilterSideItem key={idx} title={filter}/>
      ))}
    </ul>
  )
}

export default FiltersSide