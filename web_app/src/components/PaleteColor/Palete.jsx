import React from 'react'
import './Palete.css'

export const colorPalete = ["#F18F01", "#D62828", "#2F52E0","#D2FF28", "#BDD5EA"];

function Palete() {
  return (
    <div className="colorPalete">
      <span className="colorPalete__title">Paleta de cores: </span>
      
      <ul className="colorPalete__list">
        <li className="color__list--items" style={{background: colorPalete[0]}}>{colorPalete[0]}</li>
        <li className="color__list--items" style={{background: colorPalete[1]}}>{colorPalete[1]}</li>
        <li className="color__list--items" style={{background: colorPalete[2]}}>{colorPalete[2]}</li>
        <li className="color__list--items" style={{background: colorPalete[3]}}>{colorPalete[3]}</li>
        <li className="color__list--items" style={{background: colorPalete[4]}}>{colorPalete[4]}</li>
      </ul>
    </div>
  )
}

export default Palete