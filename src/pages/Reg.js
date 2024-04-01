import React, {useContext, useState}  from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import {Card, Container, Form, Button, Col, Row} from 'react-bootstrap'

import {observer} from "mobx-react-lite";

import {User} from "../index"
import {Main_route, Login_route, Reg_route} from "../path-comp/url_consts";
import {registration, login } from "../API/userAPI";


const Reg = observer(() => {
    document.body.style.backgroundColor = "white"
    
    const {user} = useContext(User)
    const navigate =useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === Login_route
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [passwd, setPassword] = useState('')
    const [passwdCheck, setPasswordCheck] = useState('')

    const click = async () =>{
    try{
        if (isLogin){
            const response = await login(email,phone,passwd)
            console.log(response)
        }
        else{  
            const response = await registration(name,email, phone, passwd, passwdCheck)
            console.log(response)
        }
        user.setUser(response)
        user.setIsAuth(true)
        navigate(Main_route)} 
    catch(e){
        alert(e)
    }

    }
    return (
        <Container
        className = 'd-flex justify-content-center align-items-center '
        style = {{height: window.innerHeight - 54}}>
        <Card style={{width: 600}} className="p-5 bg-dark">
            <h2 className="m-auto" style={{color:'white'}}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                className="mt-3"
                type="text"
                placeholder = "Введите имя"
                value = {name}
                size="lg"
                onChange = { e => setName(e.target.value)}
                />
                <Form.Control
                className="mt-3"
                type="email"
                placeholder = "Введите email"
                value = {email}
                size="lg"
                onChange = { e => setEmail(e.target.value)}
                />
                <Form.Control
                className="mt-3"
                type="tel"
                placeholder = "Введите телефон"
                value = {phone}
                size="lg"
                onChange = { e => setPhone(e.target.value)}
                />
                 <Form.Control 
                 className="mt-3"
                 type="password"
                 placeholder = "Придумайте пароль"
                 value = {passwd}
                 size="lg"
                onChange = { e => setPassword(e.target.value)}
                 />
                 <Form.Control 
                 className="mt-3"
                 type="password"
                 placeholder = "Повторите введённый пароль"
                 value = {passwdCheck}
                 size="lg"
                onChange = { e => setPasswordCheck(e.target.value)}
                 />

                 <Row >
                    <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">
                {isLogin? 
                    <div>  <NavLink to={Main_route}>Регистрация</NavLink> </div>
                    :
                    <div> Есть аккаунт?
                        <NavLink to={Login_route}
                        variant={"outline-link"}>Войти</NavLink> </div>
                }
                        <Button
                            style={{borderRadius:41, height:71, width:195}}
                            variant={"outline-success"}
                            size="lg"
                            onClick={click}>
                            {isLogin ? 'Войти' : 'Зарегистрироваться'} 
                        </Button>
                    </Col>
                 </Row>
                 
            </Form>
        </Card>
        </Container>
    );
});

export default Reg;
