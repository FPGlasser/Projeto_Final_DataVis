import React, { Component } from 'react'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'
import { SidebarContext } from '../contexts/sidebarContext/SidebarContext';


export default class SidebarToggle extends Component {
  static contextType = SidebarContext;

  render() {
    const {toggleSidebar, isMinimized} = this.context;

    return (
      <div id='togglesidebarBtn' onClick={toggleSidebar}>
        {isMinimized && <FaChevronCircleRight />}
        {!isMinimized && <FaChevronCircleLeft />}
      </div>
    )
  }
}
