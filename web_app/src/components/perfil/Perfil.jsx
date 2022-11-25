import React from 'react'
import Avatar from '../assets/images/avatar.png'
import { BsLinkedin , BsGithub} from 'react-icons/bs'
import { SidebarContext } from '../../context/sidebarContext/SideBarContext'
import './Perfil.css'

function Perfil() {
  return (
    <SidebarContext.Consumer>{(sidebarContext)=>{
      const {isToggled, toggled, noToggled} = sidebarContext;
      const context = isToggled ? toggled : noToggled;
      console.log(context["avatar"].size)

      return(
        <div className='perfil'>
          <div className="perfil__img">
            <img className='avatar' src={Avatar} style={{width: context["avatar"].size, borderRadius: '50%'}} alt="avatar" />
          </div>
          <div className="perfil_id">
            <span className="perfil__id--items" style={{display: context.displayMode, transition: '0.5s ease-in-out'}}>Glasser Fernando Paulo</span>
            
            <div className="perfil__iconsNetwork" style={{flexDirection: context["avatar"].iconOrintation}}>
              <a href='https://www.linkedin.com/in/glasser-fernando-paulo-0ab50a160/' className="perfil__iconsNetwork--items">
                <BsLinkedin style={{fill: '#FFFFFF'}}/>
              </a>
              <a href='https://github.com/glasser95' className="perfil__iconsNetwork--items">
                <BsGithub style={{fill: '#FFFFFF'}}/>
              </a>
            </div>
            <span className="perfil__id--items"></span>
          </div>
        </div>
    )}}
    </SidebarContext.Consumer>
  )
}

export default Perfil