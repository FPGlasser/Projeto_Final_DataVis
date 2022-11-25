import React, { Component } from 'react'
import './MainContainer.css';
import { SidebarContext } from '../../context/sidebarContext/SideBarContext';


export default class MainContainer extends Component {
  render() {
    return (
      <SidebarContext.Consumer>{(sidebarContext) =>{
        const {isToggled, toggled, noToggled} = sidebarContext;
        const padding = isToggled ? toggled.sidebarWidth : noToggled.sidebarWidth; 
        return(  
        <div className='main_container' style={{paddingLeft: padding}}>
          {this.props.children}
        </div>
      )}}
      </SidebarContext.Consumer>
    )
  }
}
