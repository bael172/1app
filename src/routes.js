import Main_route from "./urlconsts"
import Login_route from "./urlconsts"
import Reg_route from "./urlconsts"
import Profile_route from "./urlconsts"
import Passive_voice_route from "./urlconsts"
import Sequence_tense_route from "./urlconsts"

import Main from "./pages/Main"
import Login from "./pages/Login"
import Reg from "./pages/Reg"
import Profile from "./pages/Profile"
import Passive_voice from "./pages/Passive_voice"
import Sequence_tense from "./pages/Sequence_tense"

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
        path: Passive_voice,
        Component: Passive_voice_route
    },
    {
        path: Sequence_tense,
        Component: Sequence_tense_route
    },
]
