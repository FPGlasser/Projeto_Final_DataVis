import {React, Component, createContext} from 'react';

export const SidebarContext = createContext();

export default class SidebarContextProvider extends Component {
  state = {
    isToggled: true,

    toggled:{
      sidebarWidth: '70px',
      displayMode: 'none',
      avatar:{
        size: '50px',
        iconOrintation: 'column',
      }
    },

    noToggled:{
      sidebarWidth: '300px',
      displayMode: 'flex',
      avatar:{
        size: '120px',
        iconOrintation: 'row',
      }
    },
  }

  toggledSidebar = ()=> {
    this.setState(!this.state.isToggled);
  }

  render() {
    return (
      <SidebarContext.Provider value={{...this.state, toggledSidebar: this.toggledSidebar}}>
          {this.props.children}
      </SidebarContext.Provider>
    )
  }
}
