import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { CartContext } from '../../CartContext';
import PayPalButton from './PayPalButton'

export default function CartTotals({ history }) {
    const { cart, clearCart } = useContext(CartContext);
    const [totals, setTotals] = useState([0, 0, 0]);

    useEffect(() => {
        let subtotal = 0;
        cart.map((item) => {
            return subtotal += item.total
        })
        const tempTax = subtotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subtotal + tax

        setTotals([subtotal, tax, total])
    }, [cart])

    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/shop">
                            <button
                                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                type="button"
                                onClick={() => {
                                    clearCart();
                                }}
                            >
                                clear cart
                  </button>
                        </Link>
                        <h5>
                            <span className="text-title"> subtotal :</span>{" "}
                            <strong>$ {totals[0]} </strong>
                        </h5>
                        <h5>
                            <span className="text-title"> tax :</span>{" "}
                            <strong>$ {totals[1]} </strong>
                        </h5>
                        <h5>
                            <span className="text-title"> total :</span>{" "}
                            <strong>$ {totals[2]} </strong>
                        </h5>
                        <PayPalButton totalAmount={totals[2]}
                            clearCart={clearCart}
                            history={history}
                            />
                    </div>
                </div>
            </div>
        </>
    )
}
