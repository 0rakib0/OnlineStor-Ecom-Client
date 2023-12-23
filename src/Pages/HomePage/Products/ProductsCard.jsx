import { useContext } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../Provider/AuthProvider"
import Swal from "sweetalert2"

const ProductCard = ({ product }) => {

    const { title, price, rating, image, variations, _id } = product
    const { user } = useContext(AuthContext)

    const hanldeAddCartItem = () => {

        if (!user) {
            alert('Please Login or Register')
            return <Navigate to='/login'></Navigate>
        }

        const CardData = {
            productId: _id, title, price, image, user: user?.email
        }
        console.log(CardData)

        fetch('https://online-storeserver.vercel.app/add-cart', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(CardData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Item Added in Cart",
                        text: `Item successfully added to the cart`,
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={image} className="transition-transform transform-gpu hover:scale-110" style={{ height: '200px', marginTop: '2rem' }} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title hover:text-[#61C5B3] duration-200"><Link to={`/view-product/${_id}`}>{title}</Link></h2>
                <p className="text-lg font-bold text-[#61C5B3]">${price}</p>
                <div className="flex justify-between">
                    <p>Color: {variations[0].color}</p>
                    <p>Size: {variations[0].size}</p>
                </div>
                <div className="flex justify-between items-center">
                    {rating == 1 ? (<div className="rating rating-md">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                    </div>) : rating == 2 ? (
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                        </div>
                    ) : rating == 3 ? (
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                        </div>
                    ) : rating == 4 ? (
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                        </div>
                    ) : (
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    )}
                    <div>
                        <button className="bg-[#61C5B3] text-white px-2 py-0.5 rounded hover:text-[#61C5B3] hover:border duration-300 border-[#61C5B3] hover:bg-transparent" onClick={hanldeAddCartItem}>Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard