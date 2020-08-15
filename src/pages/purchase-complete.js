import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import CartItem from '../components/cart/CartItem';
import Layout from '../components/layout';
import Title from '../components/globals/Title';
import styled from 'styled-components';


export default function PurchaseComplete() {

    const { cart } = useContext(CartContext);

    return (
        <Layout>
            <MessageContainer>
                <Title title="Purchase Complete"/>
                <div className="item-list">
                    {cart.map((item)=>{
                        return <CartItem key={item.id} item={item} />
                    })}
                </div>
                <div className="container">
                    <p className="text-muted text-center">
                       Thank you for your purchase   
                    </p>
                    <p className="text-muted text-center">
                        <span role="img" aria-label="love emoji">🥰</span>
                    </p>
                    <p className="text-muted text-center p2">
                        A confirmation email is on it's way.
                    </p>
                </div>
            </MessageContainer>
        </Layout>
    )
}

const MessageContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3em;

    p {
        margin: 1em 0;
        font-size: 2rem;
        /* color: var(--main2) */
    }

    .p2 {
        font-size: 1.5rem;
    }

    .item-list {
        margin: 3em 0;
        min-width: 70vw;
        padding: 1em 0;
        background: var(--purple2);
    }

`
