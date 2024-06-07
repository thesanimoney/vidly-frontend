import AccountDetails from "../components/AccountDetails.tsx";
import LoginAsk from "../components/LoginAsk.tsx";

function UserPage() {
    const token = localStorage.getItem("token");
    return <>
        {token ? <AccountDetails/> : <LoginAsk/>}
    </>
}

export default UserPage;