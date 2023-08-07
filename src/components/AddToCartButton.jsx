'use client'

import { useEffect, useRef, useState } from "react"
import AddToCart from "./Icons/AddToCartIcon"
import ButtonC from "./buttons/ButtonC"
import CloseIcon from "./Icons/CloseIcon"
import ColorsButton from "./buttons/ColorsButton"

function AddToCartButton({ price, colorName, colorValue, sizes }) {

    const [showCardItem, setShowCardItem] = useState(false)
    const [indexSize, setIndexSize] = useState('')

    const sectionRef = useRef(null);
    const buttonRef = useRef(null);

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

    const onChangeSize = (index) => {
        setIndexSize(index)
    }


  return (
    <>
        <button ref={buttonRef} onClick={() => setShowCardItem(true)} className="opacity-0 absolute bottom-3 bg-black p-3 rounded-lg md:group-hover/button:opacity-100 transition-all custom-transition md:hover:p-4">
            <AddToCart width={30} stroke='white' />
        </button>
        {showCardItem &&
            <section ref={sectionRef} className="w-full h-full bg-white z-10 border-2 border-black flex flex-col justify-center items-center gap-y-2 [&>p]:text-2xl [&>p]:font-light [&>p]:capitalize absolute">
                <p className="!font-bold !text-3xl">{price} €</p>
                <p>{colorName}</p>
                <ul className="flex px-2">
                    <li className='w-10 h-10 border-[1px] border-black rounded-full flex justify-center items-center'>
                        <ColorsButton color={colorValue} />
                    </li>
                </ul>
                <p>tallas</p>
                <div className="grid grid-rows-2 gap-2">
                    <ul className="grid grid-cols-2 gap-2 row-span-2 [&>li]:w-20 [&>li]:h-9 [&>li]:border-[1px] [&>li]:border-black [&>li]:flex [&>li]:justify-center [&>li]:items-center [&>li>button]:text-lg [&>li>button]:uppercase">
                        {sizes.map((size, index) => (
                            <li key={index}>
                                <button className={`border-black w-full h-full transition-all custom-transition ${indexSize === index ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white'}`} onClick={() => onChangeSize(index)}>{size.value}</button>
                            </li>
                        ))}
                    </ul>
                    <ButtonC onClick={() => setShowCardItem(false)} text='agregar a la cesta' bgColor='bg-black' textColor='text-white' />
                </div>
                <button onClick={() => setShowCardItem(false)}>
                    <CloseIcon className='h-6 absolute top-5 right-6 cursor-pointer'/>
                </button>
            </section>
        }
    </>
  )
}

export default AddToCartButton