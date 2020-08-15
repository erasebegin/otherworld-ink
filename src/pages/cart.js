import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import Layout from '../components/layout'
import Title from '../components/globals/Title';
import CartColumns from '../components/cart/CartColumns';
import CartList from '../components/cart/CartList';
import CartTotals from '../components/cart/CartTotals';
import EmptyCart from '../components/cart/EmptyCart';

export default function Cart() {
    const { cart } = useContext(CartContext);

    if(cart.length>0){
        return(
            <Layout>
                <Title title="cart" />
                <CartColumns />
                <CartList cart={cart} />
                <CartTotals />
            </ Layout>
        )
    } else {
        return (<Layout>
          <EmptyCart />
        </Layout>)
    }
}
