import {useQuery} from "react-query";
import axios from "axios";

interface Course {
    _id: string;
    name: string;
    description: string;
    tags: string[];
    isPublished: boolean;
    price: number;
    author: string;
}


const UseGetCourses = () => {
    const token = localStorage.getItem('token');
    return useQuery<Course[]>({
        queryKey: ['courses'],
        queryFn: () => axios.get('http://51.20.72.44' + '/api/courses', {
            headers: {
                'x-auth-token': token
            }
        }).then((res) => res.data),
    })
};

export default UseGetCourses;