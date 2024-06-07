import {useQuery} from "react-query";
import axios from "axios";

interface User {
    _id: string;
    name: string;
    email: string;
}


const UseGetUserInfo = () => {
    const token = localStorage.getItem('token');
    return useQuery<User>({
        queryKey: ['users'],
        queryFn: () => axios.get('http://13.49.159.65:3000' + '/api/me', {
            headers: {
                'x-auth-token': token
            }
        }).then((res) => res.data[0]),
    })
};

export default UseGetUserInfo;