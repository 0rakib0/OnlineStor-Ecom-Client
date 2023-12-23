import { useEffect, useState } from "react"
import ProductCard from "./ProductsCard"

const Products = () => {
    const [productLenght, setProductLenght] = useState(8)
    
    
    const [prodcts, setProduct] = useState([])
    useEffect(() => {
        fetch('https://online-storeserver.vercel.app/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleSeeAll = () =>{
        setProductLenght(prodcts.length)
    }

    return (
        <div className="bg-base-200 col-span-9 py-6 ">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 md:px-4">
                {
                    prodcts.slice(0, productLenght).map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>

            {prodcts.length == productLenght? '': <div className="flex justify-center">
                <button onClick={handleSeeAll} className="bg-[#61C5B3] py-2 px-6 text-white rounded hover:text-[#61C5B3] hover:border duration-300 border-[#61C5B3] hover:bg-transparent">See All</button>
            </div>
            }
        </div>
    )
}

export default Products