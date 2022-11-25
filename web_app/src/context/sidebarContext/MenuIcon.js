import React, { Component } from 'react'
import { SidebarContext } from './SideBarContext'
import Menu_Icon from '../../components/assets/icons/menu_icon.svg'

export default class MenuIcon extends Component {
  static contextType = SidebarContext;
  render() {
    const{ toggleSidebar, isToggled, toggled, noToggled} = this.context
    const display = isToggled ? toggled.displayMode : noToggled.displayMode;
    return (
      <div className="menu_icon__Container">
        <span id='projectTitle' style={{display: display}}>PROJETO FINAL</span>
         <img src={Menu_Icon} alt="" className='menu_icon__icon' onClick={toggleSidebar}/>
    </div>
    )
  }
}
