import React, { useEffect, useState } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Database/firebase';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const App = () => {

  const [data, setData] = useState<any>(null);

  useEffect(() => {
      axios.get('http://localhost:5000/endpoint')
          .then(response => {
              setData(response.data);
          })
          .catch(error => {
              console.error('There was an error making the request!', error);
          });
  }, []);

  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        console.log("Logged In")
        navigate('/')
      }else{
        console.log("Logged Out")
        navigate('/login ')
      }
    })

  },[])
  return (
    <div>
         <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
       <ToastContainer theme='dark'/>
      <Routes>{/*Procurar saber o significado disto*/}
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={ <Player/>}></Route>
      </Routes>
     
    </div>
  )
}

export default App
