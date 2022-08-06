import React from 'react'
import {quickSideBarData} from '../../data/quickSidebarData' 
import QuickSideBarItem from './QuickSideBarItem'

const QuickSideBar = () => {
  return (
    <div className='hidden md:block border-r-2 dark:border-none w-20 h-[calc(100vh-66px)] absolute dark:bg-darkMode dark:text-white' >
        {quickSideBarData.map(item => (
            <QuickSideBarItem key={item.id} {...item}/>
        ))}
    </div>

  )
}

export default QuickSideBar