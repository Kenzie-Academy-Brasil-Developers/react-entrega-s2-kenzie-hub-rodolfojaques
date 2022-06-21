import React from 'react';

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import logo from '../../assets/Logo.png'
import { Button } from '../../components/button';
import { Main } from '../../components/main';

import { useHistory } from 'react-router-dom';
import { FormApp } from '../../components/form/styles';

export function Login({ logUser }){

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    })

    const { register, handleSubmit, formState: {errors} } = useForm({

        resolver: yupResolver(schema)
    })

    const formSchema = (data)=> {
    
        logUser(data)
    }

    const history = useHistory()

    function redirecRegister(e){

        e.preventDefault()

        history.push('/register')
    }

    return(
    <Main>
        <img src={logo} alt='Logo da Kenzie Hub'/>
        <FormApp onSubmit={handleSubmit(formSchema)}>              
            <h4>Login</h4>          
            <div className='div-input'>
                <label>Email</label>
                <input type='text' placeholder='Digite aqui seu email' {...register('email')}/>
            </div>
            <div className='div-input'>
                <label>Senha</label>
                <input type='password' placeholder='Digite aqui sua senha' {...register('password')}/> 
            </div>
            <Button type={"submit"} nameButton="Entrar"/>
            <span style={{
            fontSize: "smaller"
            }}>
            Ainda não possui uma conta?
            </span>
            <Button onclick={redirecRegister} nameButton="Cadastre-se" backcolor='grey'/>
        </FormApp>
    </Main>
    )
}