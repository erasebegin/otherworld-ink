import React from 'react';
import styled from 'styled-components';

export default function CartColumns() {
    return (
        <Columns className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-muted">products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-muted">name</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-muted">price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-muted">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-muted">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-muted">total</p>
                </div>
            </div>
        </Columns>
    )
}

const Columns = styled.div`
    /* color: var(--main2); */
`
