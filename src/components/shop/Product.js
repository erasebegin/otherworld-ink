import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { MdShoppingCart } from "react-icons/md";
import PayPalButton from '../cart/PayPalButton';

export default function Product({ product, history }) {
    const { inCart, image, title, price, caption, id } = product
    const { addToCart, clearCart, setPurchaseComplete } = useContext(CartContext)
    return (

        <Card className="mx-auto my-3 col-9 col-md-6 col-lg-3">
            <div className="img-container">
                {/* <Link to="/details" onClick={() => handleDetail(id)}> */}
                    <img className="card-img-top" src={image.fields.file.url} alt={title} />
                {/* </Link> */}
                <button disabled={inCart ? true : false} onClick={() => addToCart(id)}>
                    {inCart ? <Link to="/cart" className="cart-link">in cart</Link> : <MdShoppingCart />}
                </button>
            </div>
            <h4 className="text-center my-2">{title}</h4>
            <p className="caption">{caption}</p>
            <p className="price">${price}</p>
            {/* <PayPalButton
                totalAmount={price}
                clearCart={clearCart}
                purchaseComplete={()=>setPurchaseComplete(true)}
                addToCart={() => addToCart(id)}
                history={history}
            /> */}
        </Card>

    )
}



const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--purple3);
    border-radius: 10px;
    padding: 1em;
    transition: 200ms ease-in-out;

    .img-container {
        position: relative;
        overflow: hidden;
    }

    button {
        position: absolute;
        transform: translate(100%, 100%);
        bottom: 0;
        right: 0;
        padding: 0 0.4em;
        transition: 200ms ease-in-out;
        background: var(--pink);
        color: white;
        border: none;
        border-radius: 5px 0 0 0;
        font-size: 1.5rem;

        &:hover {
            background: var(--purple1);
            color: var(--pink);
        }

        p {
            padding: 0;
            margin: 0;
        }
    }

    h4 {
        color: var(--purple2);
        text-align: left;
        font-weight: 800;
    }

    .caption {
        color: var(--pink);
    }

    .price {
        font-weight: 300;
        font-size: 1.3rem;
        color: var(--purple2);
    }

    &:hover {
        box-shadow: 0px 0px 10px 0px var(--pink);
        transform: scale(1.05);
        transition: 200ms ease-in-out;

        button {
            transform: initial;
            transition: 200ms ease-in-out;
        }
    }

    .cart-link {
        text-decoration: none;
        color: var(--purple3);
    }
`
