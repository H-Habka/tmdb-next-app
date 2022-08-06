import { sidebarItems } from "./sidebarData";


const getQuickSideBar = () => {
    let quickSideBarData = []
    let counter = 0;
    for(let i of sidebarItems){
        for(let j of i.childrenItems){
            if(counter === 5) return quickSideBarData
            quickSideBarData.push(j)
            counter++
        }
    }
}


export const quickSideBarData = getQuickSideBar()




