import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instragram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="footer-icons">{/*Div que contem os nosso media social icon*/}
        <img src={facebook_icon} alt="face book icon" id='face'/>
        <img src={instragram_icon} alt="instagram icon" id='insta'/>
        <img src={twitter_icon} alt="twitter icon" id='twit'/>
        <img src={youtube_icon} alt="youtube icon" id='you'/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cars</li>
        <li>Media Center</li>
        <li>Invensor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Noticies</li>
        <li>Cookie Preferences</li>
        <li>Corporate information</li>
        <li>Constct us</li>
      </ul>

      <div className='links-externos'>
        <p >
          All the image by Netflix.
        </p>
        <p>
          All the videos by TMDB.
        </p>
      </div>
      
    </div>
  )
}

export default Footer
