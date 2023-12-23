import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import { FaRegTrashAlt } from "react-icons/fa"
import Swal from "sweetalert2"

const ProductCard = () => {

    const { user } = useContext(AuthContext)
    const [cardItem, setCardItem] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/cart-items/${user?.email}`)
            .then(res => res.json())
            .then(data => setCardItem(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/cart-product-delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Items Removed",
                        text: 'Item successfully removed please relode',
                        icon: "success"
                    });
                }
            })

    }


    return (
        <div className="bg-base-200 w-11/12 mx-auto">
            <h1 className="text-2xl">Your Card Items:</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cardItem.map(item => <tr>
                                <th>1</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.title}
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn bg-red-400 btn-xs"><FaRegTrashAlt className="text-xl text-white"></FaRegTrashAlt></button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}



export default ProductCard