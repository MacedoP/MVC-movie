import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import seach_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/asset 0.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../Database/firebase';

const NavBar = () => {

  //Este jeito so funciona usando js como linguagem const navRef = useRef();
  const navRef = useRef<HTMLDivElement | null>(null);//Forma de usar com o tsx

  useEffect(()=>{
    //Esta funcao abixao quer dizer quando eu rodar no eixo Y o nossa header vai ficar escuro
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navRef.current?.classList.add('nav-dark')//Adiciona o dark no header
      }else{
        navRef.current?.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>

      <div className="navbar-left"> {/*logo image in this div*/}
        {/* <img src={logo} alt='logo img'/> */}
        <h1 className='logo-name'>MVCmovie</h1>
        <ul>
          <li>Home</li>
          <li>tv show</li>
          <li>movies</li>
          <li>new & popular</li>
          <li>my list</li>
          <li>browse by languages</li>
        </ul>

      </div>

      <div className="navbar-right">
        <img src={seach_icon} alt="Search icon" className='icons' />{/*Icon de pesquisa*/}

        <p>children</p>

        <img src={bell_icon} alt="Bell icon" className='icons' />{/*Icone do sino*/}

        <div className="navbar-profile">
            <img src={profile_img} alt="Icon profile" className='profile' />{/*Icone do avatar*/}
            <img src={caret_icon} alt="Icon profile" />

          <div className="dropdown">{/*Aui colocamos o nosso dropdown que esta ao lado do icon so avatar*/}
            <p onClick={()=>{logout()}}>sign out of netflix</p>

          </div>

        </div>

      </div>
    </div>
  )
}

export default NavBar
