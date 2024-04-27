import React, { useContext, useState, useEffect } from "react";
import { Card, Container, Form, Button } from 'react-bootstrap'
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Login_route, Reg_route, Main_route } from "../path/url_consts";
import { registration, login } from "../API/userAPI"
import { observer } from "mobx-react-lite";
import { Context } from "../index"

const Auth = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    const isLogin = location.pathname === Login_route;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        document.body.style.backgroundColor = "#F6F6F6";
        return () => {
            document.body.style.backgroundColor = ""; // Возвращаем исходный стиль фона при размонтировании компонента
        };
    }, []);

    const click = async () => {
        try {
            let response;
            if (isLogin) {
                response = await login(email, phone, password);
            } else {
                response = await registration(name, email, phone, password);
            }
            console.log(response);
            user.setUser(response.data); // Предполагается, что в ответе на запрос есть данные пользователя
            user.setIsAuth(true);
            navigate(Main_route);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ height: window.innerHeight - 54 }}>
            <Card style={{ width: 600 }} className="p-5 bg-dark">
                <h2 className="m-auto" style={{ color: 'white' }}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        style={{ borderRadius: 70, height: 71, border: "1px solid" }}
                        className="mt-3"
                        placeholder="Введите имя"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        style={{ borderRadius: 70, height: 71, border: "1px solid" }}
                        className="mt-3"
                        placeholder="Введите почту"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        style={{ borderRadius: 70, height: 71, border: "1px solid" }}
                        className="mt-3"
                        placeholder="Введите телефон"
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <Form.Control
                        style={{ borderRadius: 70, height: 71, border: "1px solid" }}
                        className="mt-3"
                        placeholder="Введите пароль"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button variant={"outline-success"} onClick={click} className="mt-3">
                        {isLogin ? 'Войти' : 'Регистрация'}
                    </Button>
                    {isLogin ? (
                        <NavLink to={Reg_route} className="mt-3 text-white">
                            Регистрация
                        </NavLink>
                    ) : (
                        <NavLink to={Login_route} className="mt-3 text-white">
                            Вход
                        </NavLink>
                    )}
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
