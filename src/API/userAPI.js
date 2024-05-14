import {$authHost, $host} from "./index";
import  {jwtDecode} from 'jwt-decode';

export const registration = async (s_name,s_email,s_phone,s_passwd,s_passwdAgain,s_role) => {
    const {data} = await $host.post('api/user/reg', {s_name,s_email,s_phone,s_passwd,s_passwdAgain,s_role})
    localStorage.setItem('token', data.token) //data.token - откуда берётся 
    return jwtDecode(data.token)
}

export const login = async (s_email,s_phone,s_passwd) => {
    const {data} = await $host.post('api/user/login', {s_email,s_phone,s_passwd})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/check' )
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}