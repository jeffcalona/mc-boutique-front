'use client'

import { useSelector } from "react-redux"
import { useRouter, useSearchParams } from "next/navigation"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useEffect } from "react"

import BackIcon from "../Icons/BackIcon"
import ButtonC from "../buttons/ButtonC"
import DirectLink from "../buttons/DirectLink"

const SumaryCart = () => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const { itemsPrice, totalPrice, cartItems } = useSelector((state) => state.cart)

    useEffect(() => {
        if(searchParams.get("success")) {
            toast.success("Pago realizado")
            // removeAllFromCart()
        }

        if(searchParams.get("canceled")) {
            toast.error("Algo salió mal")
        }
    }, [searchParams])

    const onCheckout = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productsChekout: cartItems.map((item) => item),
            productIds: cartItems.map((item) => item.id),
            qtysProductChek: cartItems.map((item) => item.qty)
        })
        window.location = response.data.url
    }

    return (
        <div className="border border-gray-300 h-[210px] flex justify-center items-center">
            <div className="w-[80%] space-y-3 flex flex-col items-center justify-center">
                <ul className="[&>li]:flex [&>li]:justify-between [&>li]:items-center [&>li>p]:font-bold w-full">
                    <li>
                        <p>Sub total</p>
                        <p>{itemsPrice} €</p>
                    </li>
                    <li className="[&>p]:!font-light">
                        <p>Envío</p>
                        <p>Por definir €</p>
                    </li>
                    <li>
                        <p>Total</p>
                        <p>{totalPrice} €</p>
                    </li>
                </ul>
                <ButtonC onClick={onCheckout} text='Tramitar la compra' bgColor='bg-black' textColor='text-white' disabled={false} />
                <DirectLink onClick={() => router.push('/')} title='Seguir comprando' titleIcon={<BackIcon stroke='black' height={20} />} />
            </div>
        </div>
    )
}

export default SumaryCart