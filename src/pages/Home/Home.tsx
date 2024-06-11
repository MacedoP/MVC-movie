import React from 'react';
import './Home.css';
import NavBar from '../../components/Navbar/NavBar';
import hero_banner from '../../assets/hero_banner.jpg';
import bgImg from '../../assets/cards1/asset 1.jpeg'
import titleImg from '../../assets/cards1/asset 2.png'
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/Titlestyle';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <div className='home'>{/*Container principal */}
      <NavBar/>

      <div className="hero">{/*Div que contem a imagem do bg e a imgem do titulo do filme*/}
        <img src={bgImg} alt="img-bg" className='banner-img' />{/*Imagem do fundo bg image*/}

        <div className="hero-caption">
          <img src={titleImg} alt="title movie"  className='caption-img'/>{/*imagem do titulo do filme image tltle*/}
          <p>Um aluno novo entra em uma escola renomada com um objetivo secreto. Nesse mundo de elite, cheio de segredos sombrios, ele encara jogos perigosos para cumprir sua missão.</p>

          <div className="hero-btns">{/*Div que contem os botoes abaixo do paragrafo que descreve o filme*/}
            <button className='btn '><img src={play_icon} alt="icon play" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="icon info" />More info</button>
          </div>

          <TitleCards title={''} category={''}/>
  
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={'Blockbuster Movies'} category={"top_rated"}/>
      <TitleCards title={'Only on MVCmovie'} category={"popular"}/>
      <TitleCards title={'Upcoming'} category={"upcoming"}/>
      <TitleCards title={'Tops for you'} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home

