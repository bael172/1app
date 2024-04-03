import React, {useContext} from "react"
import {Routes,Route,Navigate} from 'react-router-dom'
import {publicRoutes, authRoutes, managerRoutes} from '../path-comp/routes'
import {Login_route} from "../path-comp/url_consts"
import Login_route from "../pages/Login"

import {User} from "../index"

import {User} from "../index"

const AppRouter = () => {
    User.checkAuth()
    return (
        <Routes>
            {isAuth && managerRoutes.map(
                ({path,Component}) =>
            <Route key = {path} path={path} element = {<Component/>} exact/>
            )}
            {isAuth && authRoutes.map(
                ({path,Component})=>
            <Route key = {path} path={path} element = {<Component/>} exact/>
            )}
            {publicRoutes.map(
                ({path,Component})=>
            <Route key = {path} path={path} element = {<Component/>} exact/>
            )}
            <Route path="*" element = {<Navigate to={Login_route} />} replace />
        </Routes>
    )
}
export default AppRouter
