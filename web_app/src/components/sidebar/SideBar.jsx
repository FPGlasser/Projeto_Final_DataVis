import React from 'react'
import './Sidebar.css'
import University from '../university/University';
import Perfil from '../perfil/Perfil';
import Nav from '../nav/Nav';
import Menu_Icon from '../assets/icons/menu_icon.svg'
import { SidebarContext } from '../../context/sidebarContext/SideBarContext';

function SideBar() {
  return (
    <SidebarContext.Consumer>{(sidebarContext) =>{
      const {isToggled, toggled, noToggled} = sidebarContext
      const context = isToggled ? toggled.sidebarWidth : noToggled.sidebarWidth;
      
      return(

        <div className='sidebar' style={{width: context}}>
        <div>
        <div className="menu_icon__Container">
          <img src={Menu_Icon} alt="" />
        </div>
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