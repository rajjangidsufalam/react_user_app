import { BrowserRouter, Routes, Route, Outlet, NavLink } from "react-router-dom";
import Login from "./module/login"
import Register from "./module/register"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

function RouteList() {
    useEffect(()=>{
        toast("Working Fine")
    },[])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route path="login" element={<Login></Login>} />
                    <Route path="register" element={<Register></Register>} />
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