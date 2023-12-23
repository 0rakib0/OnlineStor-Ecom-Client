import Bannner from "../../../../Banner"
import Service from "../../Service/Service"
import Products from "../Products/Products"

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            {/* Bannner section */}
            <Bannner></Bannner>
            {/* service section  */}
            <Service></Service>
            {/* Product section */}
            <Products></Products>

        </div>
    )
}

export default Home