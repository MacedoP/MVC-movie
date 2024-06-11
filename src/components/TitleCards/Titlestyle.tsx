import React, { useEffect, useRef, useState } from 'react'
import '../../components/TitleCards/TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import card1_data from '../../assets/cards1/Cards_data'
import axios from 'axios'
import { Link } from 'react-router-dom'

interface TitleCardsProps {
  title: string;
  category: string;
}

export interface Movie {
  [x: string]: any
  backdrop_path: string;
  original_title: string;
}

const TitleCards: React.FC<TitleCardsProps> = ({title, category}) => {

  // const [apiData , setApiData] = useState([]);
  const [apiData, setApiData] = useState<Movie[]>([]);

  /*Esta funcao abaixo nos permite rodar a nossa lista de filme no eixo x usando o scrool do mouse*/
  const cardsRef = useRef<HTMLDivElement | null>(null);

/*O codigo abaixo foi retirado da base de dados TMDM movie, que nos da a imagem do flme e um curto trailer do mesmo*/
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDZmNzNhNWVkNTlhOTliYjI2Mjg1Nzg2MWE0OTQ1NSIsInN1YiI6IjY2NTM2MzZhYjRjMTAyZWFmYjNiYjE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vk0caOx092CG28iRp3pEwf_tjW8CrrwzEmfQAAFiSwQ'
    }
  };
  
  

  const handleWheel = (event: { preventDefault: () => void; deltaY: number }) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category: "now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
    const currentRef = cardsRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);
  
  return (
    <div className='title-cards'>
      <h1>{title?title:"Popular on MVCmovie"}</h1>

      <div className="card-list" ref={cardsRef}>{/*Lista de filme */}

        {apiData.map((card, index)=>{
          return <Link className='card' key={index} to={`/player/${card.id}`}>
              {/* <img src={card.image} alt="first img" className='big-img'/> before tmdb database
              <p>{card.name}</p> */}
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="first img" className='big-img' />
            <p>{card.original_title}</p>

          </Link>
        })}
      </div>

    </div>
  )
}

export default TitleCards
