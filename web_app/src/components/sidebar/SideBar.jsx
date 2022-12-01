import React from 'react'
import './Sidebar.css'
import University from '../university/University';
import Perfil from '../perfil/Perfil';
import Nav from '../nav/Nav';
import { SidebarContext } from '../../context/sidebarContext/SideBarContext';
import MenuIcon from '../../context/sidebarContext/MenuIcon';

function SideBar() {
  return (
    <SidebarContext.Consumer>{(sidebarContext) =>{
      const {isToggled, toggled, noToggled} = sidebarContext
      const context = isToggled ? toggled.sidebarWidth : noToggled.sidebarWidth;
      
      return(

        <div className='sidebar background_blur' style={{width: context}}>
        <div>
        <MenuIcon />
        <University />
        </div>
        <Perfil />
        <Nav />
        <div>

        </div>
        <div>

        </div>
      </div>
    )}}
    </SidebarContext.Consumer>
  )
}

export default SideBar;