import {React, Component, createContext} from 'react';

export const SidebarContext = createContext();

export default class SidebarContextProvider extends Component {
  state = {
    isToggled: false,

    toggled:{
      sidebarWidth: '60px',
      displayMode: 'none',
      avatar:{
        size: '50px',
        iconOrintation: 'column',
      }
    },

    noToggled:{
      sidebarWidth: '320px',
      displayMode: 'flex',
      avatar:{
        size: '120px',
        iconOrintation: 'row',
      }
    },
  }

  toggleSidebar = ()=> {
    this.setState({isToggled: !this.state.isToggled});
  }

  render() {
    return (
      <SidebarContext.Provider value={{...this.state, toggleSidebar: this.toggleSidebar}}>
          {this.props.children}
      </SidebarContext.Provider>
    )
  }
}
