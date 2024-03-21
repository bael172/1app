import {useLocation, useNavigate, NavLink} from "react-router-dom"
import {observer} from "mobx-react-lite"

import User from "../index"

const Login = observer(() => {
    document.body.style.backgroundColor="#FFFFFF"
    const {user}=useContext(User)
    const navigate = useNavigate()
    const location = useLocation()
})
export default Login