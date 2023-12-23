const ProductCard = ({ product }) => {

    const { title, price, rating, image, variations } = product
    console.log(variations[0].size)

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={image} className="transition-transform transform-gpu hover:scale-110" style={{ height: '200px', marginTop: '2rem' }} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
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
                        <button className="bg-[#61C5B3] text-white px-2 py-0.5 rounded hover:text-[#61C5B3] hover:border duration-300 border-[#61C5B3] hover:bg-transparent">Add To Card</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard