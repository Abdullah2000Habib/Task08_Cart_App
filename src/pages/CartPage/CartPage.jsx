import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useProductContext } from '../../contexts/productContext';
import "./style.css";
const CartPage = () => {
    const {state} = useProductContext();
    return (
        <>
            <div className='cartPageWrapper'>
                {!state.products.length && 'no product in Cart'}
                <ul>
                    {state?.products?.map((product) =>(
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </ul>
                <p className='cartPageCount'>Products in cart:{state.count}</p>
                <p className='cartPagePrice'>total price:{state.products.reduce((acc,curr)=>acc + curr.price,0)}</p>
            </div>
        </>
    );
}
export default CartPage;
