import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { BsTrashFill } from 'react-icons/bs'

export default function CartButtons({ count, id }) {
    const {increment, decrement, removeItem} = useContext(CartContext)
    return (
        <>
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
        </>
    )
}
