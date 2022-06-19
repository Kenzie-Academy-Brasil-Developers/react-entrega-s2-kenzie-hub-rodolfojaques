import { Route, Switch } from 'react-router-dom';
import { Button } from './components/button';

import { Form } from './components/form';
import { Input } from './components/input';
import { Main } from './components/main';

import logo from './assets/Logo.png'

import  GlobalStyle  from './styles/styles';
import { Header } from './components/header';
import { Select } from './components/select';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route exact path={'/'}>
          <Main>
            <img src={logo} alt='Logo da Kenzie Hub'/>
            <Form>              
              <h4>Login</h4>
              <Input placeholder='Insira seu Email...' labelTxt='Email:'/>
              <Input type='password' placeholder='Insira sua senha...' labelTxt='Senha:'/>
              <Button nameButton="Entrar"/>
              <span style={{
                fontSize: "smaller"
              }}>
                Ainda não possui uma conta?
              </span>
              <Button nameButton="Cadastre-se" backcolor='grey'/>
            </Form>
          </Main>
        </Route>
        <Route exact path={'/register'}>
          <Main padding='1.5rem 0'>
            <Header />
            <Form>              
              <h4>Crie sua conta</h4>
              <span style={{
                fontSize: "smaller"
              }}>
                Rapido e grátis, vamos nessa
              </span>              
              <Input type='text' placeholder='Digite aqui seu nome' labelTxt='Nome'/>
              <Input type='text' placeholder='Digite aqui seu email' labelTxt='Email'/>
              <Input type='password' placeholder='Digite aqui sua senha' labelTxt='Senha'/>
              <Input type='password' placeholder='Digite novamente sua senha' labelTxt='Confirmar senha'/>
              <Input type='textarea' placeholder='Fale sobre você' labelTxt='Bio'/>
              <Input type='text' placeholder='Opção de contato' labelTxt='Contato'/>
              <Select labelSelect="Selecionar módulo" />
              <Button nameButton="Cadastre-se" backcolor='#59323F'/>
            </Form>
          </Main>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
