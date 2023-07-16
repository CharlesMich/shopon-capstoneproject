import {useDispatch} from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import * as sessionActions from "../../store/session"
import {Link} from "react-router-dom"
import './demouser.css'

const DemoUser = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const onClick = () => {
        dispatch(sessionActions.login("demo@aa.io", "password")).then(history.push("/"))
    };
    return <Link to='/' onClick={onClick} className="demo-user">Demo User</Link>
}

export default DemoUser