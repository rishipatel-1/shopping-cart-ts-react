import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { getSelectorProduct } from '../slice/ProductSlice'

interface productlistprops {

}



const ProductList: FC<productlistprops> = ({ }) => {

    const products = useSelector(getSelectorProduct)
    return (
        <>
            <label>National</label>

            {products.map((product)  => {
                return (
                    <div key={product.id}>
                        <span>{`${product.title} : ${product.price}`}</span>
                    </div>
                )
            })}
        </>

    )
}
export default ProductList;