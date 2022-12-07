import React from 'react'
import { Routes, Route} from 'react-router-dom';
import { SidebarContext } from '../contexts/sidebarContext/SidebarContext'
import Topbar from '../topbar/Topbar';
import Description from '../../pages/description/Description'
import Analyses from '../../pages/analyses/Analyses'
import Dashboard from '../../pages/dashboard/Dashboard'
import DataContextProvider from '../contexts/dataContext/DataContext';
import './Main.css'


function Main() {
  return (
    <SidebarContext.Consumer>{(sidebarContext)=>{
      
      const {isMinimized, sidebarMinimized, sidebarMaximized } = sidebarContext
      const sidebar = isMinimized ? sidebarMinimized : sidebarMaximized;
      
      return(

        <div id='main_section' style={{paddingLeft: sidebar.sidebarWidth}}>

          <Topbar/>
          
          <DataContextProvider>
            <Routes>
                <Route path='/' element={<Description />}></Route>
                <Route path='/analise' element={<Analyses />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
            </Routes>
          </DataContextProvider>
        
        </div>
    )}}
    </SidebarContext.Consumer>
  )
}

export default Main