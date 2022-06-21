import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from 'yup';

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "../../components/button";
import { Form } from "../../components/form";
import { FormApp } from "../../components/form/styles";
import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Modal } from "../../components/modal";
import { DivStyle } from "./styles";

export function Home({autenticado,setAutenticado,addTech, setAddTech,createTech}){

    useEffect(()=>{
        !autenticado? history.push('/') : <></>
    },[])

    const info = JSON.parse(localStorage.getItem('Info_User'))

    const history = useHistory()

    const schema = yup.object().shape({
        title: yup.string().required('Campo obrigatório*'),
        status: yup.string().required('Campo obrigatório*')
    })

    const { register,handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    const formSchema = (data)=> createTech(data)

    return(
        <Main padding='1.5rem 0'>
            {
                !!addTech
                ?
                <Modal>
                    <header>
                        <h4>Cadastrar tecnologia</h4>
                        <span onClick={()=> setAddTech(false)}>x</span>
                    </header>
                    <FormApp onSubmit={handleSubmit(formSchema)}>
                        <div className='div-input'>
                            <label>Nome</label>
                            <input type="text" placeholder="Nome da habilidade" {...register('title')} />                            
                        </div>
                        <div className='div-input'>
                            <label>Selecionar status</label>
                            <select name="modulo" id="modulo" {...register('status')} >
                                <option value="Iniciante">{'Iniciante'}</option>
                                <option value="Intermediário">{"Intermediário"}</option>
                                <option value="Avançado">{"Avançado"}</option>                
                            </select>                            
                        </div>
                        <Button type={"submit"} nameButton={"Cadastrar Tecnologia"} size= "100%"/>
                    </FormApp>
                </Modal>
                :
                <></>
            }
            <Header 
            onclick={()=>{
                localStorage.clear()
                setAutenticado(false)
                history.push('/')
            }} 
            nameButton="Sair"
            />
            <DivStyle>
                <hr />
                <div className="div1">
                    <h3>Olá, {info.name}</h3>
                    <span>{info.course_module}</span>                    
                </div>
                <hr />
                <div className="div2">
                    <h4>Tecnologias</h4>
                    <Button onclick={()=>{setAddTech(true)}} size="2rem" divSize="13%" nameButton="+" backcolor="#212529" />
                </div>   
                <Form>
                    <ul>

                        {
                        info.techs.map((tech,i)=> {
                            return (
                                <li key={i}>
                                    <h4>{tech.title}</h4>
                                    <span>{tech.status}</span>    
                                </li>                                    
                            )
                        })
                        }
                    </ul>
                </Form>              
            </DivStyle>
           
        </Main>
    )
}