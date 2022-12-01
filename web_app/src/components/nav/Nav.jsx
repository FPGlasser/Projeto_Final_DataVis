import React from 'react'
import {Link} from 'react-router-dom'
import {SidebarContext} from '../../context/sidebarContext/SideBarContext'
import {MdOutlineDescription, MdQueryStats, MdOutlineDashboard} from 'react-icons/md'
import './Nav.css'
import { IconContext } from 'react-icons';

function Nav() {

  return (

    <SidebarContext.Consumer>{(sidebarContext)=>{
      const {isToggled, toggled, noToggled} = sidebarContext;
      const context = isToggled ? toggled : noToggled;

      return(
      <IconContext.Provider value={{ color: 'white', size: '32px' }}>

      <div className='nav'>    
        <h3 className="title" style={{display: context.displayMode, transition: '0.5s ease-in-out'}}>Navegação</h3>
        
        <Link to={'/'} className="navBtns__items btn1">
          <MdOutlineDescription />
          <span className='icons_titles' style={{display: context.displayMode, transition: '0.5s ease-in-out'}}>Descrissão</span></Link>
        <Link to={'/analises'} className="navBtns__items btn2">
          <MdQueryStats />
          <span className='icons_titles' style={{display: context.displayMode, transition: '0.5s ease-in-out'}}>Analise</span>
        </Link>
        <Link to={'/dashboard'} className="navBtns__items btn3">
          <MdOutlineDashboard />
          <span className='icons_titles' style={{display: context.displayMode, transition: '0.5s ease-in-out'}}>Dashboard</span>
        </Link>
    </div>
    </IconContext.Provider>
    )}}
    </SidebarContext.Consumer>
  )
}

export default Nav