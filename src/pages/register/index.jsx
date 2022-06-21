import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


import { useHistory } from "react-router-dom";

import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { FormApp } from '../../components/form/styles';


export function Register({createUser}){

  const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório*'),
    email: yup.string().email().required('Campo obrigatório*'),
    password: yup.string().matches( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/).required('Campo obrigatório*'),
    confirmPassword: yup.string().oneOf([yup.ref('password')]).required('Campo obrigatório*'),
    bio: yup.string().required('Campo obrigatório*'),
    contact: yup.string().required('Campo obrigatório*'),
    course_module: yup.string().required('Campo obrigatório*')
  })

  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const history = useHistory()

  function backLogin(){

    history.push('/')
  }

  const formSchema = (data) => createUser(data)

    return (
        <Main padding='1.5rem 0'>
        <Header onclick={backLogin}/>
        <FormApp onSubmit={handleSubmit(formSchema)}>              
          <h4>Crie sua conta</h4>
          <span style={{
            fontSize: "smaller"
          }}>
            Rapido e grátis, vamos nessa
          </span>              
          <div className='div-input'>
            <label>Nome</label>
            <input type='text' placeholder='Digite aqui seu nome' {...register('name')} />            
          </div>
          <div className='div-input'>
            <label>Email</label>
            <input type='text' placeholder='Digite aqui seu email' {...register('email')} />
          </div>
          <div className='div-input'>
            <label>Senha</label>
            <input type='password' placeholder='Digite aqui sua senha' {...register('password')} />
          </div>
          <div className='div-input'>
            <label>Confirmar senha</label>
            <input type='password' placeholder='Digite novamente sua senha' {...register('confirmPassword')} />
          </div>
          <div className='div-input'>
            <label>Bio</label>
            <input type='textarea' placeholder='Fale sobre você' {...register('bio')} />
          </div>
          <div className='div-input'>
            <label>Contato</label>
            <input type='text' placeholder='Opção de contato' {...register('contact')} />
          </div>
          <div className='div-input'>
            <label>Selecionar módulo</label>
            <select name="modulo" id="modulo" {...register('course_module')} >
                <option value="Primeiro módulo (Introdução ao Frontend)">{'Primeiro módulo'}</option>
                <option value="Segundo módulo (Frontend Avançado)">{"Segundo módulo"}</option>
                <option value="Terceiro módulo (Introdução ao Backend)">{"Terceiro módulo"}</option>                
                <option value="Quarto módulo (Backend Avançado)">{"Quarto módulo"}</option>                
            </select>
          </div>          
          <Button type={'submit'} nameButton="Cadastre-se" backcolor='#59323F'/>
        </FormApp>
      </Main>
    )
}