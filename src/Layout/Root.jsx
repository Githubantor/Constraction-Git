import { Outlet } from "react-router-dom";
import Home from "../Component/Home/Home/Home";
import Navbar from "../Component/NavBar/Navbar";


const Root = () => {
    return (
        <div className="mx-24">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Home></Home>
        </div>
    );
};

export default Root;