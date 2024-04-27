import React, {useContext} from "react"
import {Routes,Route,Navigate} from 'react-router-dom'
import {publicRoutes, authRoutes} from '../path/routes'
import {Main_route, Login_route, Profile_route, Reg_route, Course_route, Sequence_tense_route, Passive_voice_route,  } from "../path/url_consts"

import {User} from "../index"

const AppRouter = () => {
    const {user} = useContext(User)
    let isAuth = user.getAuth()
    return (
        <Routes>
            {isAuth && authRoutes.map( //проверка на авторизацию проход по массиву managerRoutes. каждому элементу из которых применется деструктуризация объекта (элемент данного массива)
                ({path:dest,Component:Page}) //деструктуризация элемента массива являющегося объекта, др. словами запись в path значения ключа path объекта, запись в Component значения ключа Component объекта
            <Route key = {dest} path={dest} element = {<Page/>} exact/>
            )}
            {publicRoutes.map(
                ({path:dest,Component:Page})
            <Route key = {dest} path={dest} element = {<Page/>} exact/>
            )}
            <Route path="*" element = {<Navigate to={Main_route} />} replace />
        </Routes>
    )
}
export default AppRouter
