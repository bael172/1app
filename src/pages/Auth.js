import React, { useContext, useState, useEffect } from "react";
import { Card, Container, Form, FloatingLabel, InputGroup, SplitButton, Button, Col, Row, Dropdown } from 'react-bootstrap'
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Login_route, Reg_route, Main_route } from "../path/urlconsts";
import { Login_route, Reg_route, Main_route } from "../path/urlconsts";
import { registration, login } from "../API/userAPI"
import { observer } from "mobx-react-lite";
import { User } from "../index"

import "./Auth.css"

const Auth = observer(() => {
    const { user } = useContext(User);
    const navigate = useNavigate();
    const location = useLocation();
    const isLogin = location.pathname === Login_route;

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [phoneCode, setPhoneCode] = useState('+7') //телефонный код Россия по умолчанию

    const Country_number={
      'RU': '+7',
      'UA': '+380',
      'BY': '+375',
      'KZ': '+7',
      'AZ': '+994',
      'AM': '+374',
      'UZ': '+998',
      'TM': '+993',
      'GE': '+995',
      'TJ': '+992',
      'KG': '+996',
      'MD': '+373',
      'DE': '+49',
      'FR': '+33',
      'IT': '+39',
      'ES': '+34',
      'PT': '+351',
      'GB': '+44',
      'NL': '+31',
      'BE': '+32',
      'SE': '+46',
      'NO': '+47',
      'DK': '+45',
      'FI': '+358',
      'PL': '+48',
      'CZ': '+420',
      'SK': '+421',
      'HU': '+36',
      'RO': '+40',
      'BG': '+359',
      'GR': '+30',

      'US':'+1',
      'BR': '+55',
      'CA': '+1',
      'AU': '+61',
    }
    let Country_number_pairs = Object.entries(Country_number) //создаём пары [ключ,значение] для простой вставки в map.set(key,value)
    let Country_number_map = new Map() //Map нужен для использования функций map.get(key)

    Country_number_pairs.forEach((item)=>{ //создаём Map состоящий из Object.entries(Сountry_number)
      Country_number_map.set(item[0],item[1])
    })
    
    const handleCountryChange = (country) =>{
      let number=Country_number_map.get(country.target.value) //обращение к передаваемому в функцию значению = option value
      setPhoneCode(number)
    }

    useEffect(() => {
        document.body.style.backgroundColor = "#F0FFFF";
        return () => {
            document.body.style.backgroundColor = "F0FFFF"; // Возвращаем исходный стиль фона при размонтировании компонента
        };
    }, []);

    const click = async () => {
        try {
            let response = await login(email, phone, password);
            if(response.status === 200) { //успешный вход
                user.setUser(response.data)
                user.setIsAuth(true)
            }
            if(response.status === 401){
                alert("Введите эл.почту/телефон и пароль")
            }
            if(response.status === 202){
                alert("")
            }
            //добавить условия response.status
            else{
                throw new Error(response.data.message)
            }

            console.log(response);
;
;
            navigate(Main_route);
        } catch (error) {
            alert(error.message);
        }
    };

    function quarter_screen(){ //функция сокращения изначального внешнего окна браузера до четверти от изначального
        window.resizeTo(window.screen.availHeight/2 , window.screen.availWidth/2)
    }
    quarter_screen()

    return (
      <Container className="d-flex justify-content-center align-items-center mt-5 pt-5">
        <Card
          style={{
            width: 600,
            height: window.innerHeight - 350,
            backgroundColor: "#D9D9D9",
          }}
          className=" px-5 py-4"
        >
          <h2 className="mb-3 text-dark" style={{ textAlign: "center" }}>
            {isLogin ? "Авторизация" : "Регистрация"}
          </h2>
          <Form className="d-block">

            <FloatingLabel label="Email" className="">
              <Form.Control
                className="mb-3"
                placeholder="Введите почту"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FloatingLabel>

            <InputGroup className="mb-3">
              <Form.Select className=""  onChange={handleCountryChange}>
                <option value="RU">Россия:&#x1F1F7;&#x1F1FA;</option>
                <option value="UA">Украина: &#x1F1FA;&#x1F1E6;</option>
                <option value="BY">Беларусь: &#x1F1E7;&#x1F1FE;</option>
                <option value="KZ">Казахстан: &#x1F1F0;&#x1F1FF;</option>
                <option value="AZ">Азербайджан: &#x1F1E6;&#x1F1FF;</option>
                <option value="AR">Армения: &#x1F1E6;&#x1F1F2;</option>
                <option value="UZ">Узбекистан: &#x1F1FA;&#x1F1FF;</option>
                <option value="TM">Туркменистан: &#x1F1F9;&#x1F1F2;</option>
                <option value="GE">Грузия: &#x1F1EC;&#x1F1EA;</option>
                <option value="TJ">Таджикистан: &#x1F1F9;&#x1F1EF;</option>
                <option value="KG">Кыргызстан: &#x1F1F0;&#x1F1EC;</option>
                <option value="MD">Молдова: &#x1F1F2;&#x1F1E9;</option>

                <option value="GE">Германия: &#x1F1E9;&#x1F1EA;</option>
                <option value="FR">Франция: &#x1F1EB;&#x1F1F7;</option>
                <option value="IT">Италия: &#x1F1EE;&#x1F1F9;</option>
                <option value="SP">Испания: &#x1F1EA;&#x1F1F8;</option>
                <option value="PT">Португалия: &#x1F1F5;&#x1F1F9;</option>
                <option value="GB">Великобритания: &#x1F1EC;&#x1F1E7;</option>
                <option value="NL">Нидерланды: &#x1F1F3;&#x1F1F1;</option>
                <option value="BE">Бельгия: &#x1F1E7;&#x1F1EA;</option>
                <option value="SE">Швеция: &#x1F1F8;&#x1F1EA;</option>
                <option value="NO">Норвегия: &#x1F1F3;&#x1F1F4;</option>
                <option value="DK">Дания: &#x1F1E9;&#x1F1F0;</option>
                <option value="FI">Финляндия: &#x1F1EB;&#x1F1EE;</option>
                <option value="PL">Польша: &#x1F1F5;&#x1F1F1;</option>
                <option value="CZ">Чехия: &#x1F1E8;&#x1F1FF;</option>
                <option value="SK">Словакия: &#x1F1F8;&#x1F1F0;</option>
                <option value="HU">Венгрия: &#x1F1ED;&#x1F1FA;</option>
                <option value="RO">Румыния: &#x1F1F7;&#x1F1F4;</option>
                <option value="BG">Болгария: &#x1F1E7;&#x1F1EC;</option>
                <option value="GR">Греция: &#x1F1EC;&#x1F1F7;</option>

                <option value="US">США: &#127482;&#127480;</option>
                <option value="BR">Бразилия: &#x1F1E7;&#x1F1F7;</option>
                <option value="CA">Канада: &#x1F1E8;&#x1F1E6;</option>
                <option value="AU">Австралия: &#x1F1E6;&#x1F1FA;</option>
              </Form.Select>
              <InputGroup.Text className="py-3">{`${phoneCode}`}</InputGroup.Text>
                <Form.Control
                  className=""
                  placeholder="___-___-__-__"
                  pattern="\+?\d{1,3}?[-. ]?\(?\d{1,4}?\)?[-. ]?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,4}"
                  title="Номер телефона должен быть в формате +7(XXX)XXX-XX-XX"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />

            </InputGroup>

            <FloatingLabel label="Пароль" className="">
              <Form.Control
                className="mb-3"
                placeholder="Введите пароль"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FloatingLabel>

            <div className="d-grid" 
            style={{gridTemplateColumns:'repeat(2,1fr)', gridColumnGap:"20em"}}>
              <Button
                as={Col}
                variant={"outline-success"}
                onClick={click}
                className=""
              >
                {isLogin ? "Войти" : "Регистрация"}
              </Button>
              {isLogin ? (
                <NavLink
                  to={Reg_route}
                  className="text-blue p-0 mr-3"
                  style={{}}
                >
                  Регистрация
                </NavLink>
              ) : (
                <NavLink to={Login_route} className="mt-3 text-white">
                  Вход
                </NavLink>
              )}
            </div>
          </Form>
        </Card>
      </Container>
    );
});

export default Auth;
