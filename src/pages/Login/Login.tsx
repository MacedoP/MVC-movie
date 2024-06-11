import React, { ChangeEvent, useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../Database/firebase'
import loading_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signState, setSignState] = useState("Sign In");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]= useState(false);//Variavel que controla o icon que gira na pagina de login


  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  
  }

  //Funcao para autenticar os usuario
  const user_auth = async (event: any)=>{
    event.preventDefault();
    setLoading(true)

    if(signState=== "Sign In"){
      await login(email, password);

    }else{
      await signup(name, email, password);
    }
    setLoading(false);
  }

  

  return (
    loading?<div className='login-spinner'>
      <img src={loading_spinner} alt="spinner gif" />
    </div>:
    
    <div className='login'>

      {/* <img src={logo} alt="Login page logo" /> */}
      <h1 className='logo-login'>MVCmovie</h1>

      <div className="login-form">{/*Dentro desta div construimos o nosso formulario*/}
        <h1>{signState}</h1>

        <form>
          {signState==="Sign Up"? 
          <input value={name}  onChange={handleChange} type="text" placeholder='your name ...' />: <></>}{/*operador ternario para verficar se o nome na existe*/}
         
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email ...' />

          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password ...' />

          <button onClick={user_auth} type='submit'>{signState}</button>

          <div className="form-help">

            <div className="remember">
                <input type="checkbox"/>
                <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>

          </div>

        </form>

        <div className="form-switch">{/*Div onde esta colocado os links para novos registros, responsavel pela verificacao do cadastro*/}
          {signState==="Sign In"?
          <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>
          :<p>Already have account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>
          }
        </div>

      </div>
    </div>
  )
}

export default Login
