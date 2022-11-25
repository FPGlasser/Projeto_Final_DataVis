import React from 'react'
import {Link} from 'react-router-dom'
import Description_icon from '../assets/icons/description_icon.svg'
import Query_icon from '../assets/icons/query_icon.svg';
import Dashboard_icon from '../assets/icons/dashboard_icon.svg';
import {SidebarContext} from '../../context/sidebarContext/SideBarContext'
import './Nav.css'

function Nav() {

  return (

    <SidebarContext.Consumer>{(sidebarContext)=>{
      const {isToggled, toggled, noToggled} = sidebarContext;
      const context = isToggled ? toggled : noToggled;

      return(
  
      <div className='nav'>    
        <h3 className="title" style={{display: context.displayMode, transition: '0.5s ease-in-out'}}>Navegação</h3>
        
        <Link to={'/'} className="navBtns__items btn1">
          <img src={Description_icon} alt='icon'/>
          <span className='icons_titles' style={{display: context.displayMode, transition: '0.5s ease-in-out'}}>Descrissão</span></Link>
        <Link to={'/analises'} className="navBtns__items btn2">
          <img src={Query_icon} alt='icon'/>
          <span className='icons_titles' style={{display: context.displayMode, transition: '0.5s ease-in-out'}}>Analise</span>
        </Link>
        <Link to={'/dashboard'} className="navBtns__items btn3">
          <img src={Dashboard_icon} alt='icon'/>
          <span className='icons_titles' style={{display: context.displayMode, transition: '0.5s ease-in-out'}}>Dashboard</span>
        </Link>
    </div>
    )}}
    </SidebarContext.Consumer>
  )
}

export default Nav