import useGetUserInfo from "../hooks/useGetUserInfo.ts";
import {AxiosError} from "axios";

function AccountDetails() {
    const {data, error, isError} = useGetUserInfo()

    if (isError && error instanceof AxiosError) return <div className="alert alert-dark" role="alert">
        {error.message}
    </div>

    return <>
        <div className="mx-2 mt-3">
            <h5>Email: {data?.email}</h5>
            <h5><span className="badge text-bg-secondary">Name: {data?.name}</span></h5>
            <p className="fs-6">ID: {data?._id}</p>
        </div>
    </>
}

export default AccountDetails;