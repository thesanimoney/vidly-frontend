import {useForm} from "react-hook-form";
import useLogin, {Login} from "../hooks/useLogin.ts";
import Logout from "../components/Logout.tsx";

function LoginPage() {
    const {register, handleSubmit, formState: {errors}} = useForm<Login>()
    const {mutate, error, isError, isSuccess, isLoading} = useLogin()

    const onSubmit = (data: Login) => {
        mutate(data)
    }

    const token = localStorage.getItem("token")
    if (token) return <Logout/>

    return <>
        {isSuccess &&
            <div className="alert alert-success w-25 mt-3 mx-2 p-2" role="alert">Congrats you are Logged in!</div>}
        {isError &&
            <div className="alert alert-danger w-25 mt-3 mx-2 p-2" role="alert">{error?.response?.data as string}</div>}
        <div className={'container w-25 mt-5'}>
            <h1 className={'fw-bold'}>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input {...register('email', {required: true})} type="email" className="form-control"
                           id="exampleInputEmail1"
                           aria-describedby="emailHelp"/>
                    {errors.email && <p className={'text-danger'}>This field is required</p>}
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input {...register('password', {required: true})} type="password" className="form-control"
                           id="exampleInputPassword1"/>
                    {errors.password && <p className={'text-danger'}>This field is required</p>}
                </div>
                <button disabled={isLoading} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>
}

export default LoginPage;