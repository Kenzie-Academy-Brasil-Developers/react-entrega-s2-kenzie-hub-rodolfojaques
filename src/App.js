import { Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import  GlobalStyle  from './styles/styles';

import { Login } from './pages/login';
import { Register } from './pages/register';
import { Home } from './pages/home';


function App() {

  const token = localStorage.getItem('Token_User')

  const history = useHistory()

  const [addTech, setAddTech] = useState(false)

  const [editTech,setEditTech] = useState(false)

  const base_URL = 'https://kenziehub.herokuapp.com'

  const createUser = (data)=> {

    axios.post(`${base_URL}/users`,data)
    .then((resp) => {
      toast.success('Conta criada com sucesso!', {
        position: "top-right",
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
        position: "top-right",
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

      history.push('/home')
    })
    .catch((err)=> {
      toast.error('Ops! Algo deu errado', {
        position: "top-right",
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
      toast.success('Sucesso ao adicionar nova tecnologia!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      setAddTech(false)
      setTimeout(()=>{
        window.location.reload()
      },3100)
    })
    .catch((err)=> {
      toast.error('Ops! Algo deu errado', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      setAddTech(false)
      setTimeout(()=>{
        window.location.reload()
      },3100)
    })
  }

  const apiEditTech = (data,techId)=> {

    axios.put(`${base_URL}/users/techs/${techId}`, data, {headers:{Authorization: `Bearer ${token}`}})
    .then((resp)=> {
      resp?.status === 201?
      toast.success('Sucesso ao editar tecnologia!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }):<></>
      setEditTech(false)
      setTimeout(()=>{
        window.location.reload()
      },3100) 
    })
    .catch((err)=> {
      toast.error('Ops! Algo deu errado', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      setEditTech(false)
      setTimeout(()=>{
        window.location.reload()
      },3100) 
    })
  }

  const deleteTech = (techId)=> {

    axios.delete(`${base_URL}/users/techs/${techId}`, {headers:{Authorization: `Bearer ${token}`}})
    .then((resp)=> {
      toast.success('Sucesso ao excluir tecnologia!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      setEditTech(false)
      setTimeout(()=>{
        window.location.reload()
      },3100) 
    })
    .catch((err)=> {
      console.log(err)
      setEditTech(false)
        window.location.reload() 
    })
  }

  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer
      position="top-right"
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
          addTech={addTech} 
          setAddTech={setAddTech}
          createTech={createTech}
          editTech={editTech}
          setEditTech={setEditTech}
          apiEditTech={apiEditTech}
          deleteTech={deleteTech}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
