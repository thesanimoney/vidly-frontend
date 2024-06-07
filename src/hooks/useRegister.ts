import {useMutation} from "react-query";
import axios, {AxiosError, AxiosResponse} from "axios";
import {useNavigate} from "react-router-dom";
import {useToken} from "../state/useToken.ts";

export interface Register {
    email: string,
    password: string,
    name: string
}

const UseRegister = () => {
    const navigate = useNavigate();
    const {setToken} = useToken()

    return useMutation<AxiosResponse, AxiosError, Register>({
        mutationFn: async (data: Register) => {
            return await axios.post('http://13.49.159.65:3000' + '/register', data)
        },
        onSuccess: (response) => {
            const token = response.headers['x-auth-token'];
            if (token) {
                localStorage.setItem('token', token);
                setToken(token)
            }
            navigate('/')
        },
    })
};

export default UseRegister;