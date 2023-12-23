import { Outlet } from "react-router-dom"
import Header from "../SharePage/Header/Header"
import NavBar from "../SharePage/NavBar/NavBar"
import Footer from "../SharePage/Footer/Footer"

const Root = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Root