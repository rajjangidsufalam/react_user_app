import { BrowserRouter, Routes, Route, Outlet, NavLink } from "react-router-dom";
import Login from "./module/login"
import Register from "./module/register"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import User from "./module/user"

function RouteList() {
    const setMessage = (type,message) => {
        type === "success" ? toast(message) : toast.error(message)  
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route path="login" element={<Login setMessage={setMessage}></Login>} />
                    <Route path="register" element={<Register setMessage={setMessage}></Register>} />
                    <Route path="user" element={<User></User>} />
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
        <ToastContainer/>
        <Outlet/>
    </>)
}

export default RouteList