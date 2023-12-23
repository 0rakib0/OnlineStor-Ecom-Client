import { useEffect, useState } from "react"
import ProductCard from "./ProductsCard"

const Products = () => {

    const [prodcts, setProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    console.log(prodcts)

    return (
        <div className="bg-base-200 col-span-9 py-6">
            {/* product filter section                               */}
            <div className="flex justify-between md:px-6 items-center pb-4">
                <div>
                    <h4 className="text-xl font-semibold uppercase">Shops</h4>
                </div>
                <div>
                    <label htmlFor="" className="text-lg ml-6">Sort Items: </label>
                    <select name="" id="" className="p-2 border-2 w-44 rounded-xl bg-transparent outline-0">
                        <option value="" selected hidden>Flter Data</option>
                        <option value="">A-Z</option>
                        <option value="">Low to Heigh</option>
                        <option value="">Heigh to Low</option>
                    </select>
                </div>
            </div>
            <hr />
            <div>
                {
                    prodcts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    )
}

export default Products