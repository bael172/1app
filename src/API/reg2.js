import React, {useEffect,useState} from "react";
import axios from "axios";
//const axios = require('axios').default

function Reg() {
    const host = axios.create({
        baseURL:process.env.REACT_APP_URL
    })

    const [data, setData] = useState({name:"",email:"",phone:"",passwd:"",role:""})
    const [response, setResponse] = useState("")
    
    const handleChange = (event) => {
        setData({...data, [event.target.name]:event.target.value})
    }
    
    const handleSubmit = (event) => {
    event.preventDefault();
        axios.post(`${host}/api/user/reg`,data)
        .then((response)=>{
            setResponse(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    localStorage.setItem('token', data.token)
    return (
        <div>
            <h1>Отправка данных на сервер</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Имя:
                    <input
                      type="text"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
                    Email:
                    <input
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
                    Номер телефона:
                    <input 
                      type="number"
                      name="phone"
                      value={data.s_phone}
                      onChange={handleChange}
                      />
                </label>
                <br/>
                <label>
                    Пароль
                    <input 
                      type="password"
                      name="passwd"
                      value={data.s_passwd}
                      onChange={handleChange}
                      />
                </label>
                <button type="submit">Отправить</button>
            </form>
            {response && (
                <p>Данные успешно отправлены:{response.name} ({response.email}) ({response.phone})</p>
            )}
        </div>
    )
}

export default Reg