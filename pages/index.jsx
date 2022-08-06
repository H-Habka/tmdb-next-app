import {QuickSideBar, SideBar, NavBar ,FiltersSide,MainContent} from "../components";
import { useState } from "react";
import {useSelector} from 'react-redux'


export default function Home() {
    const sidebarVisibility = useSelector(state => state.generalSlice.sidebarVisibility)
    const isDarkMode = useSelector(state => state.generalSlice.isDarkMode)
    
    return (
        <div className={`${isDarkMode ? "dark": ""}`}>
            <div className="dark:bg-darkMode dark:text-white">
                {sidebarVisibility &&<SideBar /> }
                <NavBar />
                <QuickSideBar />
                <FiltersSide />
                <MainContent />
            </div>
        </div>
    );
}
