import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import styled from 'styled-components';
import {BsTrashFill} from 'react-icons/bs'

export default function CartItem({ item }) {

    const { id, total, img, price, title, count } = item
    const { increment, decrement, removeItem } = useContext(CartContext)

    return (
        <List className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img
                    src={img}
                    style={{ width: "5rem", heigth: "5rem" }}
                    className="img-fluid"
                    alt=""
                />
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
                <span className="d-lg-none">product :</span> {title}
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
                <strong>
                    <span className="d-lg-none">price :</span> ${price}
                </strong>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
                <div className="d-flex justify-content-center">
                    <div>
                        <span
                            className="btn btn-light mx-1"
                            onClick={() => {
                                return decrement(id);
                            }}
                        >
                            -
              </span>
                        <span className="btn btn-light mx-1">{count}</span>
                        <span
                            className="btn btn-light mx-1"
                            onClick={() => {
                                return increment(id);
                            }}
                        >
                            +
              </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
                <div className="remove-button" onClick={() => removeItem(id)}>
                    <BsTrashFill />
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2 ">
                <strong>item total : ${total} </strong>
            </div>
        </List>
    )
}

const List  = styled.div`
    color: var(--purple3);

    .remove-button{
        font-size: 1.3rem;
    &:hover {
        filter: brightness(0.9);
        cursor: pointer;
    }}

`
