import React, { Component, createContext } from 'react'

export const  ColorPaleteContext = createContext();

export default class PaleteContext extends Component {
  render() {
    return (
      <div>PaleteContext</div>
    )
  }
}
