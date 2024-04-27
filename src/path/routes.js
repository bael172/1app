import {Main_route, Login_route, Reg_route, 
    Profile_route, Course_route, Passive_voice_route, 
    Sequence_tense_route} from "./urlconsts"

import Main from "../pages/Main"
import Login from "../pages/Login"
import Reg from "../pages/Reg"
import Profile from "../pages/Profile"
import Course from "../pages/Course"
import Passive_voice from "../pages/Passive_voice"
import Sequence_tense from "../pages/Sequence_tense"

export const authRoutes = [
    {
        path: Profile_route,
        Component: Profile
    },
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
        path: Course_route,
        Component: Course
    },
    {
        path: Passive_voice_route,
        Component: Passive_voice
    },
    {
        path: Sequence_tense_route,
        Component: Sequence_tense
    },
]
