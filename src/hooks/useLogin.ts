import axios, {AxiosError, AxiosResponse} from 'axios';
import {useMutation} from 'react-query';
import {useNavigate} from 'react-router-dom';
import {useToken} from "../state/useToken.ts";

export interface Login {
    email: string;
    password: string;
}

const useLogin = () => {
    const navigate = useNavigate();
    const {setToken} = useToken()

    return useMutation<AxiosResponse, AxiosError, Login>({
        mutationFn: async (data: Login) => {
            return await axios.post(import.meta.env.VITE_SERVER + '/login', data);
        },
        onSuccess: (response) => {
            const token = response.headers['x-auth-token'];
            if (!token) {
                throw new Error('Login failed.');
            }
            setToken(token)
            localStorage.setItem('token', token);
            navigate('/');
        },
        onError: (error) => {
            console.error('Login failed', error);
        },
    });
};

export default useLogin;
