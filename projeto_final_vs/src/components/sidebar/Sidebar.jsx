import React from 'react'
import { Link } from 'react-router-dom';
import SidebarToggle from './SidebarToggle';
import {MdQueryStats, MdDashboard, MdOutlineDescription} from 'react-icons/md'
import {IconContext} from 'react-icons';
import { SidebarContext } from '../contexts/sidebarContext/SidebarContext';
import brasao from '../../assets/images/brasaoufc.png'
import avatar from '../../assets/images/avatar.png'
import './Sidebar.css'

function Sidebar() {
  return (
    <SidebarContext.Consumer>{(sidebarContext)=>{
      
      const{ isMinimized, sidebarMinimized,sidebarMaximized } = sidebarContext;
      const sidebar = isMinimized ? sidebarMinimized : sidebarMaximized;

      return(  
        <IconContext.Provider value={{size: '32px'}}>

          <div id='sidebar' style={{width: sidebar.sidebarWidth}}>

            <div id="app_title_container">
              <img src={brasao} alt="ufc" style={{width: '48px'}}/>
              <div style={{display: sidebar.displayTexts}}>
                <span>UFC</span>
              </div>
            </div>

            <SidebarToggle />
            
            <div className="sidebar_content">

            <div className="perfil">
              <img src={avatar} alt="avatar" style={{width: sidebar.avatarSize}}/>
              <div>
                <span style={{display: sidebar.displayTexts}}>Glasser Fernando Paulo</span>
                <div id="networkicons">

                </div>
              </div>
            </div>
            <div id="nav_elements">

              <div id="nav_elements__title">
                <h3 style={{display: sidebar.displayTexts}}>Menu</h3>
              </div>

              <ul id='nav_elements__list'>

                  <li className="navelements__items">
                    <Link to={'/'} className='navelements__links'>
                      <MdOutlineDescription />
                      <span className='nav_elements__items--titles' style={{display: sidebar.displayTexts}}>Descrição</span> 
                    </Link>
                  </li>

                  <li className="navelements__items">
                    <Link to={'/analise'} className='navelements__links'>
                      <MdQueryStats />
                      <span className='nav_elements__items--titles' style={{display: sidebar.displayTexts}}>Analises</span>
                    </Link>
                  </li>

                  <li className="navelements__items">
                    <Link to={'/dashboard'} className='navelements__links'>
                      <MdDashboard />
                      <span className='nav_elements__items--titles' style={{display: sidebar.displayTexts}}>Dashboards</span>
                    </Link>
                  </li>

              </ul>
            </div>
          </div>
          </div>
        </IconContext.Provider>
      )
    }}</SidebarContext.Consumer>
  )
}

export default Sidebar;