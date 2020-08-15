import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import CartButtons from './CartButtons';
import styled from 'styled-components';

export default function CartItem({ item }) {

    const { id, total, image, price, title, count } = item
    const { purchaseComplete } = useContext(CartContext)

    return (
        <List className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img
                    src={image.fields.file.url}
                    style={{ width: "5rem", heigth: "5rem" }}
                    className="img-fluid"
                    alt=""
                />
            </div>
            <div className="col-10 mx-auto col-lg-2 spaced">
                <span className="d-lg-none">product :</span> {title}
            </div>
            <div className="col-10 mx-auto col-lg-2 spaced">
                <strong>
                    <span className="d-lg-none">price :</span> ${price}
                </strong>
            </div>
            
            { purchaseComplete ? "" : <CartButtons count = {count} id = {id}/> }

            <div className="col-10 mx-auto col-lg-2 spaced">
                <strong>item total : ${total} </strong>
            </div>
        </List>
    )
}

const List = styled.div`
    color: var(--purple3);

    .remove-button{
        font-size: 1.3rem;
    &:hover {
        filter: brightness(0.9);
        cursor: pointer;
    }
}

@media(max-width: 900px){
    .spaced {
        margin: .5em 0;
    }
}

`
