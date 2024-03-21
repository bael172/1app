import {$authHost, $host} from "./index";
import  {jwtDecode} from 'jwt-decode';

export const registration = async (name,email,phone,passwd,role) => {
    const {data} = await $host.post('api/user/reg', {name,email,phone,passwd,role})
    localStorage.setItem('token', data.token) //data.token - откуда берётся 
    return jwtDecode(data.token)
}

export const login = async (email,phone,passwd) => {
    const {data} = await $host.post('api/user/login', {email,phone,passwd})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/check' )
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}