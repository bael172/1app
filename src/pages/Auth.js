import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col, Row} from 'react-bootstrap'
import { LOGIN_ROUTE, REG_ROUTE, MAIN_ROUTE } from "../path-comp/url_consts";

import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { registration, login } from "../API/userAPI"
import {observer} from "mobx-react-lite";
import {Context} from "../index"


const Auth = observer(() => {
    document.body.style.backgroundColor = "#F6F6F6"

    const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')

    const click = async () =>{
        try{
  
        if (isLogin){
            const response = await login(email, phone, password)
            console.log(response)}
        else{  
            const response = await registration(name, email, phone, password)
            console.log(response)
    }

    user.setUser()
    user.setIsAuth(true)
    navigate(REG_ROUTE)} 
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
                placeholder = "Введите почту"
                value = {email}
                onChange = { e => setEmail(e.target.value)}
                />
                <Form.Control
                className="mt-3"
                placeholder = "Введите телефон"
                value = {phone}
                onChange = { e => setPhone(e.target.value)}
                />
                <Form.Control 
                 className="mt-3"
                 placeholder = "Введите пароль"
                 value = {password}
                onChange = { e => setPassword(e.target.value)}
                type="password"
                 />

                 <Row >
                    <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">
                {isLogin?
                <div> <NavLink to={MAIN_ROUTE}> Войти </NavLink> </div>
                :
                <div>  <NavLink to={REG_ROUTE}> Регистрация </NavLink> </div>
                }
                
                 <Button
                 variant={"outline-success"}
                            onClick={click}>
                       {isLogin ? 'Войти' : 'Регистрация'} 
                 </Button>
                 </Col>
                 </Row>
                 
            </Form>
        </Card>
        </Container>
    );
});

export default Auth;