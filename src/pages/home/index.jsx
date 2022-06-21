import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from 'yup';

import axios from "axios";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "../../components/button";
import { Form } from "../../components/form";
import { FormApp } from "../../components/form/styles";
import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Modal } from "../../components/modal";
import { DivStyle } from "./styles";


export function Home({addTech, setAddTech,createTech, editTech,setEditTech, apiEditTech, deleteTech}){

    const base_URL = 'https://kenziehub.herokuapp.com'

    const info = JSON.parse(localStorage.getItem('Info_User'))
    const token = localStorage.getItem('Token_User')

    const [tech,setTech] = useState(info?.techs)
    const [editName,setEditName] = useState('')
    const [editId,setEditId] = useState('')

    useEffect(()=>{
        !token? history.push('/') : <></>
    },[])

    useEffect(()=>{
        info && axios.get(`${base_URL}/users/${info?.id}`)
        .then((resp)=> {
            setTech(resp.data.techs)
        })
    },[addTech])

    const history = useHistory()

    const schema = yup.object().shape({
        title: yup.string().required('Campo obrigatório*'),
        status: yup.string().required('Campo obrigatório*')
    })

    const { register,handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    const formSchema = (data)=> createTech(data)
    const formEditSchema = (data)=> apiEditTech(data,editId)

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
            {
                !!editTech
                ?
                <Modal>
                    <header>
                        <h4>Tecnologia Detalhes</h4>
                        <span onClick={()=> {setEditTech(false); window.location.reload()}}>x</span>
                    </header>
                    <FormApp onSubmit={handleSubmit(formEditSchema)}>
                        <div className='div-input'>
                            <label>Nome doprojeto</label>
                            <input 
                            type="text" 
                            placeholder="Nome da habilidade" 
                            {...register('title')} 
                            value={editName} 
                            />                            
                        </div>
                        <div className='div-input'>
                            <label>Status</label>
                            <select name="modulo" id="modulo" {...register('status')} >
                                <option value="Iniciante">{'Iniciante'}</option>
                                <option value="Intermediário">{"Intermediário"}</option>
                                <option value="Avançado">{"Avançado"}</option>                
                            </select>                            
                        </div>
                        <Button type={"submit"} nameButton={"Salvar alterações"} size= "100%" backcolor="#59323F"/>
                        <Button onclick={()=> deleteTech(editId)} type="button" nameButton={"Excluir"} size= "100%" backcolor="#868E96"/>
                    </FormApp>
                </Modal>
                :
                <></>
            }
            <Header 
            onclick={()=>{
                localStorage.clear()
                history.push('/')
            }} 
            nameButton="Sair"
            divsize= "15%"
            />
            <DivStyle>
                <hr />
                <div className="div1">
                    <h3>Olá, {info?.name}</h3>
                    <span>{info?.course_module}</span>                    
                </div>
                <hr />
                <div className="div2">
                    <h4>Tecnologias</h4>
                    <Button onclick={()=>{setAddTech(true)}} size="2rem" divSize="15%" nameButton="+" backcolor="#212529" />
                </div>   
                <Form id="formDash">
                    <ul>
                        {
                        tech?.map((tech,i)=> {
                            return (
                                <li
                                onClick={(e)=> {
                                    const event = e.target.tagName
                                    
                                    event === 'LI'
                                    ?
                                    setEditName(e.target.children[0].textContent)
                                    :
                                    event === 'H4'
                                    ?
                                    setEditName(e.target.textContent)
                                    :
                                    setEditName(e.target.parentNode.children[0].textContent);

                                    event === 'LI'
                                    ?
                                    setEditId(e.target.id)
                                    :
                                    setEditId(e.target.parentNode.id);

                                    setEditTech(true)
                                }} 
                                id={tech.id} 
                                key={i}
                                >
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