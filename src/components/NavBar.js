import React, {useContext} from 'react'
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import {NavLink, useNavigate} from 'react-router-dom'

import {observer} from "mobx-react-lite"

import {User} from "../index"

import {Login_route, Reg_route, Main_route} from "../path-comp/url-consts"
import { Passive_voice_route, Sequence_tense_route } from '../path-comp/url_consts'

const NavBar = observer(()=>{
    const {user} = useContext(User)
    const logOut = () =>{
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar style={{position:'fixed'}} bg='black' variant='black' fixed='top'>
            <Container>
                <NavLink style={{color:'white'}} to={Main_route}></NavLink>
                    {user.getAuth()?
                    <Nav className='ml-auto' style={{color:'white', fontFamily:"Righteous", paddingRight:10000, letterSpacing: "20%"}}>
                        <Button size='lg' variant='outline-link'><NavLink to={Login_route}></NavLink>
                            <p class="text-white">Вход в аккаунт</p>
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color:'white'}}>
                        <Button variant={"outline-light"}><NavLink to={Profile_route}></NavLink>
                            Профиль
                        </Button>
                    </Nav>
                    }
                    <Nav className="ml-auto" style={{color:'white'}}>
                        <Button variant={"outline-light"}><NavLink to={Sequence_tense_route}></NavLink>
                            Согласование времён
                        </Button>
                    </Nav>
                    <Nav className="ml-auto" style={{color:'white'}}>
                        <Button variant={"outline-light"}><NavLink to={Passive_voice_route}></NavLink>
                            Активный и пассивный залог
                        </Button>
                    </Nav>

            </Container>
        </Navbar>
    )
})