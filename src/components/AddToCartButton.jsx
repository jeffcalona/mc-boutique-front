'use client'

import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/redux/features/cartSlice"
import * as z from 'zod'

import AddToCart from "./Icons/AddToCartIcon"
import CloseIcon from "./Icons/CloseIcon"
import ColorsButton from "./buttons/ColorsButton"
import ButtonC from "./buttons/ButtonC"
import toast from "react-hot-toast"

const FormSchema = z.string().min(1)

function AddToCartButton({ product, sizes, billboard }) {

    const dispatch = useDispatch()

    const { cartItems } = useSelector((state) => state.cart)

    const [showCardItem, setShowCardItem] = useState(false)
    const [indexSize, setIndexSize] = useState('')

    const [sizeColorSelected, setSizeColorSelected] = useState({
        sizeSelected: '',
        colorSelected: product.color.name
    })
    const [errorSize, setErrorSize] = useState(false)

    const sectionRef = useRef(null);
    const buttonRef = useRef(null);

    const selectSizeHandler = (index, sizeValue) => {
        setIndexSize(index)
        setSizeColorSelected({
            ...sizeColorSelected,
            sizeSelected: sizeValue
        })
    }

    const selectColorHandler = (colorName) => {
        setSizeColorSelected({
            ...sizeColorSelected,
            colorSelected: colorName
        })
    }

    const [qty, setQty] = useState(1)

    const onSubmit = () => {

        let newSize = sizeColorSelected.sizeSelected

        try {
            FormSchema.parse(newSize)

            let newQty = qty
            const existItem = cartItems.find((ele) => ele.id === product.id && ele.size === newSize)
            if (existItem) {
                if (existItem.qty + 1 <= product.quantity) {
                    newQty = existItem.qty + 1
                } else {
                    return toast.error('No hay más productos disponibles')
                }
            }
            toast.success('Producto agregado a la cesta')
            dispatch(addToCart({ ...product, size: newSize, qty: newQty }))
        } catch (error) {
            setErrorSize(true)
        }
    }

    const onSubmitProduct = () => {
        let newQtyP = qty
        const existItem = cartItems.find((ele) => ele.id === product.id)
        if(existItem) {
            if(existItem.qty + 1 <= product.quantity) {
                newQtyP = existItem.qty + 1
            } else {
                return toast.error('No hay más productos disponibles')
            }
        }
        toast.success('Producto agregado a la cesta')
        dispatch(addToCart({ ...product, qty: newQtyP }))
    }
    
    useEffect(() => {
        function handleClickOutside(e) {
            if (sectionRef.current && !sectionRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
                setShowCardItem(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

  return (
    <>
        <button ref={buttonRef} onClick={() => setShowCardItem(true)} className="opacity-0 absolute bottom-3 bg-black p-3 rounded-lg md:group-hover/button:opacity-100 transition-all custom-transition md:hover:p-4">
            <AddToCart width={30} stroke='white' />
        </button>
        {showCardItem &&
            <section ref={sectionRef} className="w-full h-full bg-white z-10 border-2 border-black flex flex-col justify-center items-center gap-y-2 [&>p]:text-2xl [&>p]:font-light [&>p]:capitalize absolute">
                <p className="!font-bold !text-3xl">{product.price} €</p>
                {billboard === 'productos' ? (
                    <div className="w-2/3 space-y-4">
                        <p className="text-center overflow-y-auto">{product.descriptionLong}</p>
                        {product.quantity > 0 ? (
                            <ButtonC text='Agregar a la cesta' bgColor='bg-black' textColor='text-white' disabled={false} onClick={onSubmitProduct} />
                        ) : (
                            <ButtonC text='Producto agotado' bgColor='bg-white' textColor='text-black' disabled={true} />
                        )}
                    </div>
                ): (
                    <>
                        <p>{product.color.name}</p>
                        <ul className="flex px-2">
                            <li className='w-10 h-10 border-[1px] border-black rounded-full flex justify-center items-center'>
                                <ColorsButton color={product.color.value} onClick={() => selectColorHandler(product.color.name)} />
                            </li>
                        </ul>
                        <p>tallas</p>
                        <div className="grid grid-rows-2 gap-2">
                            <ul className="grid grid-cols-2 gap-2 row-span-2 [&>li]:w-20 [&>li]:h-9 [&>li]:border-[1px] [&>li]:border-black [&>li]:flex [&>li]:justify-center [&>li]:items-center [&>li>button]:text-lg [&>li>button]:uppercase">
                                {sizes.map((size, index) => (
                                    <li key={index}>
                                        <button className={`border-black w-full h-full transition-all custom-transition ${indexSize === index ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white'}`} onClick={() => selectSizeHandler(index, size.value)}>{size.value}</button>
                                    </li>
                                ))}
                            </ul>
                            {errorSize &&
                                <p className="text-red-600 text-xs text-center">Por favor seleccione una talla</p>
                            }
                            {product.quantity > 0 ? (
                                <ButtonC type="submit" text='Agregar a la cesta' bgColor='bg-black' textColor='text-white' disabled={false} onClick={onSubmit} />
                            ): (
                                <ButtonC type="submit" text='Producto Agotado' bgColor='bg-withe' textColor='text-black' disabled={true} />
                            )}
                        </div>
                    </>
                )}
                <button onClick={() => setShowCardItem(false)}>
                    <CloseIcon className='h-6 absolute top-5 right-6 cursor-pointer fill-black'/>
                </button>
            </section>
        }
    </>
  )
}

export default AddToCartButton