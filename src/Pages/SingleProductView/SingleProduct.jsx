import { useContext, useEffect, useState } from "react"
import { FaPeopleCarry, FaRegClock, FaSearchLocation, FaStreetView } from "react-icons/fa"
import { useParams } from "react-router-dom"
import ProductCard from "../HomePage/Products/ProductsCard"
import { AuthContext } from "../../Provider/AuthProvider"
import Swal from "sweetalert2"

const SingleProduct = () => {
    const [product, setProduct] = useState([])
    const ProductId = useParams()
    const { user } = useContext(AuthContext)
    const Id = ProductId.id
    const [prodcts, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/product/${Id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const hanldeAddCartItem = (cardProduct) => {

        if (!user) {
            alert('Please Login or Register')
            return <Navigate to='/login'></Navigate>
        }

        console.log(cardProduct.title)
        

        const CardData = {
            productId: cardProduct._id, 
            title: cardProduct.title,
            price: cardProduct.title,
            image: cardProduct.image,
            user: user?.email
        }
        console.log(CardData)

        fetch('http://localhost:5000/add-cart', {
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
        <div className="w-11/12 mx-auto">
            {/* path section */}
            <p className="text-lg pl-4 mb-4">Home > Product Details > {product.title}</p>
            {/* product details section */}
            <div className="grid md:grid-cols-12 bg-base-200 rounded-lg">
                {/* product image */}
                <div className="col-span-4 p-4">
                    <img src={product.image} className="rounded-lg" alt="" />
                </div>
                {/* product info */}
                <div className="col-span-5 pl-4 md:mt-4 pb-4">
                    <h4 className="text-3xl mt-2 font-semibold">{product.title}</h4>
                    <div className="mt-2">
                        {product.rating == 1 ? (<div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                        </div>) : product.rating == 2 ? (
                            <div className="rating rating-md">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                            </div>
                        ) : product.rating == 3 ? (
                            <div className="rating rating-md">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" />
                            </div>
                        ) : product.rating == 4 ? (
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
                        )}<small className="ml-3 text-[#61C5B3]">Ratings</small>
                    </div>
                    <div className="pb-2">
                        <p>Brand: <span className="text-[#61C5B3]">No BrandMore | Unisex from No Brand</span></p>
                    </div>
                    <hr />

                    <div className="mt-4 pb-2">
                        <p className="text-[#61C5B3] text-2xl">Price: ${product.price}</p>
                        <p className="text-gray-500"><del>${(product.price - 10).toFixed(2)}</del></p>
                    </div>

                    <hr />
                    <div className="mt-4">
                        <p>Product Color: <span className="border-2 border-[#61C5B3] px-2">{product?.variations?.[0]?.color}</span></p>
                    </div>
                    <div className="mt-4">
                        <p>Product Size: <span className=""> {product?.variations?.[0]?.size}</span></p>
                    </div>
                    <div className="md:py-4 border-[#61C5B3]">
                        <p>About Product:</p>
                        <p>{product.description}</p>
                    </div>
                    <hr />
                    <div>
                        <button className="bg-[#61C5B3] w-3/4 mt-12 p-2 text-white rounded-lg" onClick={()=>hanldeAddCartItem(product)}>Add To Card</button>
                    </div>
                </div>
                {/* delivery, service and other info */}
                <div className="col-span-3 mt-6 px-2">
                    <div>
                        <p>Delivery</p>
                        <p className="flex gap-2 my-2 items-center"> <FaSearchLocation className="text-2xl text-gray-500"></FaSearchLocation>
                            Dhaka, Dhaka North, Banani Road No. 12 - 19
                        </p>
                    </div>
                    <hr />
                    <div className="mt-4">
                        <p>Service</p>
                        <p className="flex gap-2 my-2 items-center"> <FaRegClock className="text-2xl text-gray-500"></FaRegClock>
                            7 Days return system
                        </p>
                    </div>
                    <div className="mt-2">
                        <p className="flex gap-2 my-2 items-center"> <FaStreetView className="text-2xl text-gray-500"></FaStreetView>
                            6 Month warranty
                        </p>
                    </div>
                    <div className="mt-2">
                        <p className="flex gap-2 my-2 items-center"> <FaPeopleCarry className="text-2xl text-gray-500"></FaPeopleCarry>
                            Cash On Delivery
                        </p>
                    </div>
                    <hr />
                </div>
            </div>
            {/* Releted Product  */}
            <div className="bg-base-200 p-5 mt-6">
                <button className="bg-[#61C5B3] p-2 text-white rounded-lg ml-4">SHOP MORE</button>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 md:px-4">
                    {
                        prodcts.slice(0, 4).map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    )
}

export default SingleProduct