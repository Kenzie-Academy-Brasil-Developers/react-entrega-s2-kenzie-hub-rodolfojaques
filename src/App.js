import { Route, Switch, useHistory } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import  GlobalStyle  from './styles/styles';

import { Login } from './pages/login';
import { Register } from './pages/register';
import { Home } from './pages/home';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const token = localStorage.getItem('Token_User')

  const history = useHistory()

  const [autenticado,setAutenticado] = useState(false)

  const [addTech, setAddTech] = useState(false)

  const base_URL = 'https://kenziehub.herokuapp.com'

  const createUser = (data)=> {

    axios.post(`${base_URL}/users`,data)
    .then((resp) => {
      toast.success('Conta criada com sucesso!', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      history.push("/home")
    })
    .catch((err)=> {
      toast.error('Ops! Algo deu errado', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    })
  }

  const logUser = (data)=> {

    axios.post(`${base_URL}/sessions`,data)
    .then((resp) => {

      const {token, user} = resp.data 

      localStorage.setItem('Token_User',token)
      localStorage.setItem('Info_User',JSON.stringify(user))

      setAutenticado(true)
      history.push('/home')
    })
    .catch((err)=> {
      toast.error('Ops! Algo deu errado', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    })
  }

  const createTech = (data)=> {

    axios.post(`${base_URL}/users/techs`, data, {headers:{Authorization: `Bearer ${token}`}})
    .then((resp)=> {
      console.log(resp)
      toast.success('Sucesso ao adicionar nova tecnologia!', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      setAddTech(false)
    })
    .catch((err)=> {
      console.log(err)
      toast.error('Ops! Algo deu errado', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      setAddTech(false)
    })
  }

  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      <Switch>
        <Route exact path={'/'}>
          <Login 
          logUser={logUser}
          />
        </Route>
        <Route exact path={'/register'}>
          <Register 
          createUser={createUser}
          />
        </Route>
        <Route exact path={'/home'}>
          <Home 
          autenticado={autenticado}
          setAutenticado={setAutenticado}
          addTech={addTech} 
          setAddTech={setAddTech}
          createTech={createTech}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
