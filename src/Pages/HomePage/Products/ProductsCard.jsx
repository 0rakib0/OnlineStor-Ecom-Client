const ProductCard = ({ product }) => {

    const { title, price, rating, image, variations } = product
    console.log(variations[0].size)

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-lg font-bold text-[#61C5B3]">${price}</p>
                <div className="flex justify-between">
                    <p>Color: {variations[0].color}</p>
                    <p>Size: {variations[0].size}</p>
                </div>
                <div className="rating rating-md">
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-gray-400" checked />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
        </div>
    )
}

export default ProductCard