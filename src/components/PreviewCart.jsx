import { useDispatch, useSelector } from "react-redux"

import CloseIcon from "./Icons/CloseIcon"
import TrashIcon from "./Icons/TrashIcon"
import { addToCart, removeFromCart } from "@/redux/features/cartSlice"
import ShoppingCartIcon from "./Icons/ShoppingCartIcon"
import ButtonC from "./buttons/ButtonC"
import { billboardProductId } from '@/app/config'
import { useRouter } from "next/navigation"

const PreviewCart = ({ openCart, setOpenCart }) => {

    const dispatch = useDispatch()
    const router = useRouter()

    const { cartItems, itemsPrice, totalPrice } = useSelector((state) => state.cart)

    const addToCartHandler = (product, qty) => {
        dispatch(addToCart({ ...product, qty }))
    }

    const removeFromCartHandler = (id, size) => {
        dispatch(removeFromCart({id, size}))
    }

    const goPayHandler = () => {
        router.push('/checkout')
        setOpenCart(false)
    }

    return (
        <section className={`absolute ${openCart ? 'right-0' : '-right-full'} top-0 md:w-96 w-[80%] h-screen bg-white flex justify-center items-center transition-all custom-transition`}>
            <div className="w-[85%] h-[96%] flex flex-col justify-between">
                <div className="w-full h-16 flex justify-between items-center">
                    <h1 className="text-xl">Cesta de compras</h1>
                    <CloseIcon className='h-8 cursor-pointer fill-black hover:fill-slate-500 transition-all custom-transition' onClick={() => setOpenCart(!openCart)} />
                </div>
                {cartItems.length === 0 ? (
                    <div className="h-full w-ful flex flex-col justify-center items-center">
                        <ShoppingCartIcon width={50} className='stroke-slate-500' />
                        <p className="text-xl text-gray-500 my-3">
                            No hay productos en la cesta
                        </p>
                    </div>
                ) : (
                    <>
                        <ul className="w-full h-full my-2 overflow-y-auto space-y-3">
                            {cartItems.map((item, index) => {
                                return (
                                    <li key={item.id + index} className="w-full h-44 flex">
                                        <div className="w-[40%] h-full">
                                            <img src={item.images[0].url} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="w-[60%] h-full pl-3 space-y-1 [&>p]:text-sm">
                                            <div className="flex justify-between items-center">
                                                <h3 className="font-bold">{item.name}</h3>
                                                <TrashIcon onClick={() => removeFromCartHandler(item.id, item.size)} className='stroke-black hover:stroke-slate-500 cursor-pointer transition-all custom-transition' height={20} />
                                            </div>
                                            <p className="font-bold">{item.price} €</p>
                                            {item.billboardId === billboardProductId ? (
                                                <>
                                                    <p className="md:h-16 h-20 overflow-y-auto">{item.descriptionLong}</p>
                                                </>
                                                ): (
                                                    <>
                                                    <p>{item.descriptionSmall}</p>
                                                    <p className="capitalize">{item.color.name}</p>
                                                    <p className="capitalize font-semibold">Talla {item.size}</p>
                                                </>
                                            )}
                                            <div className="flex justify-between items-center pt-1">
                                                <p className="capitalize">cantidad</p>
                                                <div className="flex justify-center items-center space-x-3 w-20">
                                                    <ButtonC text='-' bgColor='bg-white' textColor='text-black' paddingY={false} onClick={() => {
                                                        if(item.qty > 1) {
                                                            addToCartHandler(item, item.qty - 1)
                                                        }
                                                    }} disabled={item.qty === 1}/>
                                                    <p>{item.qty}</p>
                                                    <ButtonC text='+' bgColor='bg-white' textColor='text-black' paddingY={false} onClick={() => {
                                                        if(item.qty < item.quantity) {
                                                            addToCartHandler(item, item.qty + 1)
                                                        }
                                                    }} disabled={item.qty >= item.quantity}/>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <div>
                            <ul className="w-full [&>li]:flex [&>li]:w-full [&>li]:justify-between mb-4">
                                <li>
                                    <p>Sub total</p>
                                    {!itemsPrice ?
                                        <p>0 €</p>
                                        : 
                                        <p>{itemsPrice} €</p>
                                    }
                                </li>
                                <li>
                                    <p>Envío</p>
                                    <p>Por definir</p>
                                </li>
                                <li className="mt-3 [&>p]:font-bold">
                                    <p>Total</p>
                                    {!totalPrice ?
                                        <p>0 €</p>
                                        : 
                                        <p>{totalPrice} €</p>
                                    }
                                </li>
                            </ul>
                            <button className="w-full h-10 bg-black border-2 border-black text-white font-bold hover:bg-white hover:text-black transition-all custom-transition" onClick={goPayHandler}>Ir a pagar</button>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default PreviewCart