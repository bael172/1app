import React, {useContext} from 'react'
import {Navbar, Nav, Container, Button, DropdownButton, DropdownItem, Image} from 'react-bootstrap'
import {NavLink, useNavigate} from 'react-router-dom'

import {observer} from "mobx-react-lite"

import {User} from "../index"

import {Login_route,  Main_route, Profile_route, 
    Course_route, Zapis_na_course_route,
    Passive_voice_route, Sequence_tense_route} from "../path/urlconsts"

import logo from "../img/eng_rizz_logo.png"
import user_logo from "../img/user.png"

const NavBar = observer(()=>{
    const navigate = useNavigate()
    const {user} = useContext(User)
    const logOut = () =>{
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar style={{position:'fixed', backgroundColor:"#A0ACD3"}} fixed='top'>
            <Container>
                    <Image src={logo} className="me-2" style={{maxWidth:"50px"}}></Image>
                    <Navbar.Brand href="../pages/Main.js" className="text-white" style={{fontStyle:"Nico Moji"}}>Eng Rizz</Navbar.Brand>
                    <Nav className="me-auto">
                    <DropdownButton title="Статьи" className="mx-2">
                        <DropdownItem to={Passive_voice_route} /*href="../pages/Passive_voice.js"*/>Пассивный залог</DropdownItem>
                        <DropdownItem to={Sequence_tense_route} /*href="../pages/Sequence_tense.js"*/>Согласование времён</DropdownItem>
                    </DropdownButton>
                    <DropdownButton title="Курсы" className="">
                        <DropdownItem>Все курсы</DropdownItem>
                        <DropdownItem>По уровню сложности</DropdownItem>
                        <DropdownItem>По специализации</DropdownItem>
                        <DropdownItem>Курсы для детей</DropdownItem>
                        <DropdownItem>Консультация на выбор курса</DropdownItem>
                    </DropdownButton>
                    </Nav>
                    <Nav className="" style={{textAlign:"right"}}>
                    <Image src={user_logo} className="mx-2" style={{maxWidth:"50px"}}></Image>
                        <Button className="text-white me-2" 
                            style={{backgroundColor:"#02D1DE", 
                            border:"none"}}
                            onClick={async()=>navigate(Login_route)}>Войти</Button>
                        <Button className="text-white" 
                            style={{backgroundColor:"#98DE02", border:"none"}}
                            onClick={async()=>navigate(Zapis_na_course_route)}
                            >Записаться на курс</Button>
                    </Nav>

            </Container>
        </Navbar>
    )
})

export default NavBar