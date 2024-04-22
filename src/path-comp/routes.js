import { Main_route, Login_route, Reg_route,
     Profile_route, Passive_voice_route, 
     Sequence_tense_route } from "./url_consts"

import Main from "../pages/Main"
import Login from "../pages/Login"
import Reg from "../pages/Reg"
import Profile from "../pages/Profile"
import Passive_voice from "../pages/Passive_voice"
import Sequence_tense from "../pages/Sequence_tense"

export const authRoutes = [
    {
        path: Profile_route,
        Component: Profile
    },
]
export const managerRoutes = [
    
]
export const publicRoutes = [
    {
        path: Main_route,
        Component: Main
    },
    {
        path: Reg_route,
        Component: Reg
    },
    {
        path: Login_route,
        Component: Login
    },
    {
        path: Passive_voice,
        Component: Passive_voice_route
    },
    {
        path: Sequence_tense,
        Component: Sequence_tense_route
    },
]
