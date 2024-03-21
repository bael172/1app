import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col, Row} from 'react-bootstrap'

import {Main_route, Login_route, Reg_route} from "../path-comp/url_consts";

import { useLocation, NavLink, useNavigate } from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index"
import {registration, login } from "../API/userAPI";


const Reg = observer(() => {
    document.body.style.backgroundColor = "white"
    
    const {user} = useContext(Context)
    const navigate =useNavigate()
    const location = useLocation()
    const isReg = location.pathname === Reg_route
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    
   const [id, setUser] = useState('')

    const click = async () =>{
    try{
        if (isReg){
            const response = await registration(name,email, phone, password)
            console.log(response)
            user.setUser(response)
            user.setIsAuth(true)
        }
        else{  
            alert("Укажите данные для регистрации")
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
        <Card style={{width: 600}} className="p-5 bg-dark">
            <h2 className="m-auto" style={{color:'white'}}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                className="mt-3"
                type="email"
                placeholder = "Введите имя"
                value = {email}
                onChange = { e => setName(e.target.value)}
                />
                <Form.Control
                className="mt-3"
                type="email"
                placeholder = "Введите email"
                value = {email}
                onChange = { e => setEmail(e.target.value)}
                />
                <Form.Control
                className="mt-3"
                type="email"
                placeholder = "Введите телефон"
                value = {email}
                onChange = { e => setPhone(e.target.value)}
                />
                 <Form.Control 
                 className="mt-3"
                 type="password"
                 placeholder = "Введите пароль"
                 value = {password}
                onChange = { e => setPassword(e.target.value)}
                 />
                 <Row >
                    <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">
                {isReg? 
                <div>  <NavLink to={Login_route}>Уже есть аккаунт? Войти</NavLink> </div>
                :
                <div> <NavLink to={Reg_route}> Регистрация </NavLink> </div>}
                 <Button
                 variant={"outline-success"}
                        onClick={click}>
                {isReg ? 'Зарегистрироваться' : 'Войти'} 
                 </Button>
                 </Col>
                 </Row>
                 
            </Form>
        </Card>
        </Container>
    );
});

export default Reg;