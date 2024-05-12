import React, {useContext, useState}  from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import {Card, Container, Form, Button, Col, Row, FloatingLabel, Dropdown, SplitButton} from 'react-bootstrap'

import {observer} from "mobx-react-lite";

import {User} from "../index"
import {Main_route, Login_route, Reg_route} from "../path/urlconsts";
import {registration, login } from "../API/userAPI";


const Reg = observer(() => {
    document.body.style.backgroundColor = "#F0FFFF"
    
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
            user.setUser(response)
            user.setAuth(true)
        }
        else{  
            const response = await registration(name,email, phone, passwd, passwdCheck)
            console.log(response)
            user.setUser(response)
            user.setAuth(true)
        }
        navigate(Main_route)} 
    catch(e){
        alert(e)
    }

    }
    return (
        <Container
        className = 'd-flex justify-content-center align-items-center '
        style = {{height: window.innerHeight - 54}}>

        <Card style={{width: 600, backgroundColor:"#D9D9D9", height:window.innerHeight-250}} 
            className="d-flex flex-column justify-content-center p-5">

            <h2 className="my-3" style={{color:'black', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            {isLogin ? 'Авторизация' : 'Регистрация'}</h2>

            <Form className="d-block">
                <FloatingLabel label="Имя" className="">
                <Form.Control
                    className="mb-3"
                    placeholder="Введите имя"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                </FloatingLabel>
                <FloatingLabel label="Email" className="">
                    <Form.Control
                    className="mb-3"
                    type="email"
                    placeholder = "Введите email"
                    value = {email}
                    onChange = { e => setEmail(e.target.value)}
                    />
                </FloatingLabel>
                <FloatingLabel label="Моб.телефон" className="">
                    <Form.Control
                    className="mb-3"
                    type="tel"
                    placeholder = "Введите телефон"
                    value = {phone}
                    onChange = { e => setPhone(e.target.value)}
                    />
                </FloatingLabel>
                <FloatingLabel label="Пароль" className="">
                    <Form.Control 
                    className="mb-3"
                    type="password"
                    placeholder = "Придумайте пароль"
                    value = {passwd}
                    onChange = { e => setPassword(e.target.value)}
                    />
                </FloatingLabel>
                <FloatingLabel label="Повторите пароль" className="">
                    <Form.Control 
                    className="mt-3"
                    type="password"
                    placeholder = "Повторите введённый пароль"
                    value = {passwdCheck}
                    size="lg"
                    onChange = { e => setPasswordCheck(e.target.value)}
                    />
                </FloatingLabel>
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
