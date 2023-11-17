'use client'

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import ButtonC from "./ButtonC"
import { addToCart } from "@/redux/features/cartSlice"

const AddBasketButtonDetail = ({ product, sizeColorSelected }) => {

    const dispatch = useDispatch()

    const { cartItems } = useSelector((state) => state.cart)

    const [qty, setQty] = useState(1)

    const addToCartHandler = (product) => {
        let newQuantity = qty
        const existItem = cartItems.find((ele) => ele.id === product.id)
        if (existItem) {
            if (existItem.qty + 1 <= product.quantity) {
                newQuantity = existItem.qty + 1
            } else {
                return alert('No hay más productos disponibles')
            }
        }
        dispatch(addToCart({...product, sizeColorSelected}))
    }


    return (
        <>
            {product.quantity > 0 ? (
                <ButtonC onClick={() => addToCartHandler(product)} text='Agregar a la cesta' bgColor='bg-black' textColor='text-white' />
            ) : (
                <button disabled>Sin Stock</button>
            )
            }
        </>
    )
}

export default AddBasketButtonDetail