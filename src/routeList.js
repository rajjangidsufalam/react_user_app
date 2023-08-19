import { BrowserRouter, Routes, Route, Outlet, NavLink, Navigate } from "react-router-dom";
import Login from "./module/login"
import Register from "./module/register"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import User from "./module/user"
import axios from "axios";

function RouteList() {

    const [userLogin,setUserLogin] = useState(localStorage.getItem("userLogin") === "true" ? true : false)
    const [userToken,setUserToken] = useState(localStorage.getItem("userToken") ? localStorage.getItem("userToken") : "")

    console.log("userToken",userToken)

    axios.defaults.headers.common['Authorization'] = userToken;

    const setMessage = (type, message) => {
        type === "success" ? toast(message) : toast.error(message)
    }

    const setUserAuth = (value,token) => {
        localStorage.setItem("userLogin",value)
        localStorage.setItem("userToken",token)
        setUserLogin(value)
        setUserToken(token)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    {userLogin
                        ?
                        <>
                            <Route path="user" element={<User></User>}/>
                            <Route path="*" element={<Navigate to="/user"/>} />
                        </>
                        :
                        <>
                            <Route path="login" element={<Login setMessage={setMessage} setUserAuth={setUserAuth}></Login>} />
                            <Route path="register" element={<Register setMessage={setMessage}></Register>} />
                            <Route path="*" element={<Navigate to="/login"/>} />
                        </>
                    }
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function Navbar() {
    return (<>
        <nav className="navbar navbar-expand-sm bg-light">
            {/* <!-- Links --> */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                </li>
            </ul>
        </nav>
        <ToastContainer />
        <Outlet />
    </>)
}

export default RouteList