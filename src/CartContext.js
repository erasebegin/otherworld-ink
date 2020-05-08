import React, { useState, useEffect, createContext } from 'react';
import { storeProducts } from './data';

export const CartContext = createContext()

export function CartProvider(props) {
    const [products, setProducts] = useState([])
    const [detail, setDetail] = useState([])
    const [cart, setCart] = useState([])
    const [purchaseComplete, setPurchaseComplete] = useState(false)
    const [purchase, setPurchased] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        let tempProducts = []
        storeProducts.forEach((item) => {
            const singleItem = { ...item }
            tempProducts = [...tempProducts, singleItem]
        })
        setProducts(tempProducts)
    }

    const getItem = id => {
        const product = products.find((item) => item.id === id)
        return product
    }

    const handleDetail = id => {
        const product = getItem(id)
        setDetail(product)
    }

    const addToCart = id => {
        const tempProducts = [...products]
        const index = tempProducts.indexOf(getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price

        setProducts([...tempProducts])
        setCart((prevCart) => [...prevCart, product])
    }

    const increment = id => {

        const tempCart = [...cart]
        const index = tempCart.indexOf(getItem(id))
        const product = tempCart[index]
        product.count += 1
        product.total = product.price*product.count

        setCart([...tempCart])

    }

    const decrement = id => {
        const tempCart = [...cart]
        const index = tempCart.indexOf(getItem(id))
        const product = tempCart[index]
        product.count -= 1
        product.total = product.price*product.count

        setCart([...tempCart])

        if(product.count <= 0) {
            removeItem(id)
        }
    }

    const removeItem = id => {
        const tempProducts = [...products]
        let tempCart = [...cart]
        tempCart = tempCart.filter((item) => item.id !== id)
        const index = tempProducts.indexOf(getItem(id))
        const product = tempProducts[index]
        product.inCart = false
        product.count = 0
        setProducts([...tempProducts])
        setCart([...tempCart])
    }

    const clearCart = () => {
        if(purchaseComplete === true) {
            setPurchased(cart)
        }
        setCart([])
        getProducts()
    }

    return (
        <CartContext.Provider value={{
            products,
            detail,
            cart,
            handleDetail,
            addToCart,
            increment,
            decrement,
            removeItem,
            clearCart,
            purchaseComplete,
            setPurchaseComplete
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
