import React from 'react'
import './University.css'
import logoUFC from '../assets/brasaoUFC.png'
import { SidebarContext } from '../../context/sidebarContext/SideBarContext'

function University() {
  return (
    <SidebarContext.Consumer>{(sidebarContext)=>{
      const {isToggled, toggled, noToggled} = sidebarContext;
      const context = isToggled ? toggled.displayMode : noToggled.displayMode;
      return(
    <div className='university'>
      <div className="university_container">
        <img className='logoufc' src={logoUFC} style={{width: '54px'}} alt="logo ufc" />
        <div id='university__id'>
          <span className='university__titles' style={{display: context}}>
          Universidade Fderal do Ceará<br/>
          Centro de Ciências<br/>
          Departamenta da Computação
          </span>
        </div>
      </div>
    </div>
     )}}
     </SidebarContext.Consumer>
  )
}

export default University