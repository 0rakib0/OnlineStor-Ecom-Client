import { Outlet } from "react-router-dom"
import Header from "../SharePage/Header/Header"
import NavBar from "../SharePage/NavBar/NavBar"

const Root = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    )
}

export default Root