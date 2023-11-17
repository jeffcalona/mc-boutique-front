import { useDispatch } from "react-redux"

import TrashIcon from "../Icons/TrashIcon"
import ButtonC from "../buttons/ButtonC"
import { addToCart, removeFromCart } from "@/redux/features/cartSlice"
import { billboardProductId } from "@/app/config"

const   TableCart = ({ cartItems }) => {

    const dispatch = useDispatch()

    const addToCartHandler = (product, qty) => {
        dispatch(addToCart({ ...product, qty }))
    }

    const removeFromCartHandler = (id, size) => {
        dispatch(removeFromCart({id, size}))
    }

    const addDecimals = (num) => {
        return (
          Math.round(num * 100) / 100
        ).toFixed(2)
    }

    return (
        <table className="md:col-span-2 w-full mb-5">
            <thead>
                <tr className="text-left">
                    <th></th>
                    <th>Productos</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody className="">
                {cartItems.map((item, index) => (
                    <tr key={item.id + index} className="border-gray-300 border-y-[1px]">
                        <td className="">
                            <TrashIcon stroke='black' height={20} onClick={() => removeFromCartHandler(item.id, item.size)} className='cursor-pointer' />
                        </td>
                        <td className="flex space-x-2 items-center py-4">
                            <div className="h-28 w-20">
                                <img src={item.images[0].url} alt={item.name} className="h-full w-full object-cover" />
                            </div>
                            <div className="sm:w-32 w-28">
                                <h3 className="capitalize font-semibold">{item.name}</h3>
                                {item.billboardId === billboardProductId ? (
                                    <p>{item.descriptionSmall}</p>
                                ): (
                                    <>
                                        <p className="capitalize font-light">{item.color.name}</p>
                                        <p className="capitalize light">Talla {item.size}</p>
                                    </>
                                )}
                            </div>
                        </td>
                        <td>
                            <p>{item.price} €</p>
                        </td>
                        <td>
                            <div className="flex justify-center items-center space-x-3 w-20">
                                <ButtonC text='-' bgColor='bg-white' textColor='text-black' paddingY={false} onClick={() => {
                                    if(item.qty > 1) {
                                        addToCartHandler(item, item.qty - 1)
                                    }
                                }} disabled={item.qty === 1}/>
                                <p className="">{item.qty}</p>
                                <ButtonC text='+' bgColor='bg-white' textColor='text-black' paddingY={false} onClick={() => {
                                    if(item.qty < item.quantity) {
                                        addToCartHandler(item, item.qty + 1)
                                    }
                                }} disabled={item.qty >= item.quantity}/>
                            </div>
                        </td>
                        <td>
                            <p>{addDecimals(item.qty * item.price)} €</p>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableCart