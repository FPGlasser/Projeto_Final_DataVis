import React, { Component, createContext } from 'react'
import data from '../../../data/bankFull.json'

export const DataContext = createContext()

export default class DataContextProvider extends Component {
  state = {
    data: data
  }

  render() {
    return (
      <DataContext.Provider value={{...this.state}}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}
