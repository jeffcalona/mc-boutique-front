'use client'

import { useSelector } from "react-redux"
import { useRouter } from "next/navigation"

import SumaryCart from "./SumaryCart"
import TableCart from "./TableCart"
import ButtonC from "../buttons/ButtonC"

const MainCheckout = () => {

    const router = useRouter()

    const { cartItems } = useSelector((state) => state.cart)

    return (
        <section className="lg:mx-20 flex justify-center sm:mx-1 mx-0">
            <div className="w-full">
                {cartItems.length > 0 ? (
                    <>
                        <h1 className="text-center mb-5 text-2xl font-semibold">Sesta de compras</h1>
                        <section className="w-full md:grid md:grid-cols-3 md:space-x-3 sm:px-0 px-2">
                            <TableCart cartItems={cartItems} />
                            <SumaryCart />
                        </section>
                    </>
                ): (
                    <div className="flex flex-col items-center">
                        <h1 className="text-center mb-5 text-2xl font-semibold">No hay productos en la cesta</h1>
                        <div className="w-56">
                            <ButtonC text='Continua comprando' bgColor='bg-black' textColor='text-white' onClick={() => router.push('/')}/>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default MainCheckout