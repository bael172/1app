import React, {useContext} from 'react'
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import {NavLink, useNavigate} from 'react-router-dom'

import {observer} from "mobx-react-lite"

import {User} from "../index"

import {Login_route,  Main_route, Profile_route, 
    Passive_voice_route, Sequence_tense_route} from "../path/url-consts"

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
                        <Button size='lg' variant='outline-link'>
                            <p class="text-white">Статьи</p>
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color:'white'}}>
                        <Button variant={"outline-light"}><NavLink to={Course_route}></NavLink>
                            <p class="text-white">Курсы</p>
                        </Button>
                    </Nav>
                    }
                    <Nav className="ml-auto" style={{color:'white'}}>
                        <Button variant={"outline-light"}><NavLink to={Login_route}></NavLink>
                            <p class="text-white">Войти</p>
                        </Button>
                    </Nav>
                    <Nav className="ml-auto" style={{color:'white'}}>
                        <Button variant={"outline-light"}><NavLink to={Zapis_na_course_route}></NavLink>
                            <p class="text-white">Записаться на курс</p>
                        </Button>
                    </Nav>

            </Container>
        </Navbar>
    )
})

export default NavBar