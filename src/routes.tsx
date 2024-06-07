import {createBrowserRouter} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage.tsx";
import GlobalPage from "./pages/GlobalPage.tsx";
import CoursesPage from "./pages/CoursesPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import UserPage from "./pages/UserPage.tsx";

const router = createBrowserRouter([
    {path: '/', element: <GlobalPage/>, children: [
            {path: '', element: <CoursesPage/>},
            {path: 'register', element: <RegisterPage/>},
            {path: 'login', element: <LoginPage/>},
            {path: 'me', element: <UserPage/>}
        ]
    },
])

export default router;