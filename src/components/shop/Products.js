import React, {useContext} from 'react';
import Title from '../globals/Title';
import Product from './Product';
import {CartContext} from '../../../CartContext';

export default function ProductList() {
    const {products}  = useContext(CartContext)
    return (
        <React.Fragment>
            <div className="py5 my-5">
                <div className="container">
                <Title title="shop" />
                    <div className="row">
                        {products.map((product)=>(<Product product={product} key={product.id}/>))}                   
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
