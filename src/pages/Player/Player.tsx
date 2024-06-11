import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const navigate = useNavigate();//variavel usada para voltar na pagina principal
  const {id} = useParams()

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDZmNzNhNWVkNTlhOTliYjI2Mjg1Nzg2MWE0OTQ1NSIsInN1YiI6IjY2NTM2MzZhYjRjMTAyZWFmYjNiYjE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vk0caOx092CG28iRp3pEwf_tjW8CrrwzEmfQAAFiSwQ'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="back  arrow" onClick={()=>{navigate(-2)}} />{/*Aqui esta a configuracao usad para voltar a pagina home principal*/}

      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} 
      title='Trailer' frameBorder='0' allowFullScreen> </iframe>

      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>

      
    </div>
  )
}

export default Player
