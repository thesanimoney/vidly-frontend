import useGetCourses from "../hooks/useGetCourses.ts";
import {AxiosError} from "axios";
import LoginAsk from "../components/LoginAsk.tsx";

function CoursesPage() {
    const {data, error, isError} = useGetCourses()
    const token = localStorage.getItem("token");

    if (!token) return <LoginAsk/>

    if (isError && error instanceof AxiosError) return <div className="alert alert-danger" role="alert">
        {error.response!.data}
    </div>

    return <>
        <div className="container d-flex mt-3 align-items-center gap-4 flex-wrap">
            {data?.map((course, index) => <div key={index} className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
                    <p className="card-text">{course.description}</p>
                    <p className="card-text">{course.price}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>)}
        </div>
    </>
}

export default CoursesPage;