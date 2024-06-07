import {useNavigate} from "react-router-dom";
import {useToken} from "../state/useToken.ts";

function Logout() {
    const navigate = useNavigate();
    const {setToken} = useToken()

    const onUnlogin = () => {
        localStorage.removeItem("token")
        setToken('')
        navigate("/login");
    };

    return <>
        <div className="d-flex mt-3 mx-2">
            <p className={'mx-1'}>You have already logged in, if you want to change account</p>
            <a onClick={() => onUnlogin()} className={'cursor link-underline-secondary link-secondary'}>click here</a>
        </div>
    </>
}

export default Logout;