import React from 'react'
import SearchComponent from './SearchComponent'
import SideBarHeader from '../sidebar/SideBarHeader'
import NavUserSection from './NavUserSection'

const NavBar = () => {
  return (
    <div className='flex  w-full justify-between pr-6 py-2'>
        <SideBarHeader inNavBar={true}/>
        <SearchComponent />
        <NavUserSection />
    </div>
  )
}

export default NavBar