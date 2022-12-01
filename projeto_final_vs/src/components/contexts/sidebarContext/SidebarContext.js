import React, { Component, createContext } from 'react'
export const SidebarContext = createContext()

export default class SidebarContextProvider extends Component {

  state = {
    isMinimized: !true,

    sidebarMaximized: {
      sidebarWidth: '300px',
      displayTexts: 'inherit',
      avatarSize: '150px'
    },

    sidebarMinimized: {
      sidebarWidth: '70px',
      displayTexts: 'none',
      avatarSize: '60px'
    }

  }

  toggleSidebar = ()=>{
    this.setState({isMinimized: !this.state.isMinimized})
  }

  render() {
    return (
      <SidebarContext.Provider value={{...this.state, toggleSidebar: this.toggleSidebar}}>
        { this.props.children }
      </SidebarContext.Provider>
    )
  }
}
