import React, {useContext, useState} from "react"
import {useLocation, useNavigate, NavLink} from "react-router-dom"
import {Card, Container, Form, Button, Col} from "react-bootstrap"

import {observer} from "mobx-react-lite"

import {User} from "../index"
import { Login_route, Reg_route, Main_route} from "../path/url_consts"
import { registration, login, check} from "../API/userAPI"

const Login = observer(() => {
    document.body.style.backgroundColor="#FFFFFF"
    const {user} = useContext(User)
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === Login_route //true / false
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [passwd, setPasswd] = useState('')

    const handleClick = async() =>{
        try{
            if(isLogin) {
                const response = await login(email,phone,passwd)
                console.log(response)
                user.setUser(response)
                user.setIsAuth(true)
            }
            else{
                const response = await registration(email,phone,passwd)
                console.log(response)
            }
            //userStore.js
            navigate(Main_route)
        }
        catch(e){
            alert(e)
        }
    }


    return(
        <Container>
            //Email
            <label for="email">Введите email</label> 
            <input type="email" id="mail" class="input"
            onClick={e => setEmail(e.target.value)}></input>
            //Телефон
            <label for="phone">Введите телефон</label>
            <input type="tel" id="phone" class="input"
            onClick={e => setPhone(e.target.value)}></input>
            //Пароль
            <label for="passwd">Введите пароль</label>
            <input type="password" id="passwd" class="input"
            onClick={e => setPasswd(e.target.value)}></input>
            //Кнопка
            
            if(isLogin){<div>Нет аккаунта?<NavLink to={Reg_route}>
                <input type="button" value="Регистрация"
                style="padding: 20px 32px;
                background-color: green;
                border: none;
                border-radius: 10%;
                text-align: center;
                display: inline-block;"
                onСlick={navigate(Reg_route)}
                />
                </NavLink></div>
                }
            else {<input type="button" value="Войти" 
                style="padding: 20px 32px;
                background-color: green;
                border: none;
                borer-radius:10%;
                text-align: center;
                display: inline-block;"
                onclick={navigate(Main_route)}
                />
            }
            <Button style={{borderRadius:41, height: 70, width:195 }}
            variant={"outline-dark"}
            size="lg" onClick={handleClick}>
                {isLogin? 'Войти' : 'Регистрация'}
            </Button>
        </Container>

    )
})
export default Login