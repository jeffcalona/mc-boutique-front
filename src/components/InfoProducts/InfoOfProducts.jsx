'use client'

import Link from 'next/link'
import { useState } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'

import ColorsButton from '@/components/buttons/ColorsButton'
import RuleIcon from '@/components/Icons/RuleIcon'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import MainInfoProducts from './mainInfoProducts'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import ButtonC from '../buttons/ButtonC'
import { addToCart } from '@/redux/features/cartSlice'
import { billboardProductId } from '@/app/config'

const FormSchema = z.object({
    size: z.string({
        required_error: 'Por favor seleccione una talla'
    })
})

function InfoOfProducts({ productDetail, productSize }) {

    const dispatch = useDispatch()

    const form = useForm({
        resolver: zodResolver(FormSchema)
    })

    const { cartItems } = useSelector((state) => state.cart)

    const [qty, setQty] = useState(1)

    const onSubmit = ({size}) => {
        let newQty = qty
        const existItem = cartItems.find((ele) => ele.id === productDetail.id && ele.size === size)
        if (existItem) {
            if (existItem.qty + 1 <= productDetail.quantity) {
                newQty = existItem.qty + 1
            } else {
                return toast.error('No hay más productos dispobibles')
            }
        }
        toast.success('Producto agregado a la cesta')
        dispatch(addToCart({...productDetail, size, qty: newQty}))
    }

    const onSubmitP = () => {
        let newQty = qty
        const existItem = cartItems.find((ele) => ele.id === productDetail.id)
        if (existItem) {
            if (existItem.qty + 1 <= productDetail.quantity) {
                newQty = existItem.qty + 1
            } else {
                return toast.error('No hay más productos dispobibles')
            }
        }
        toast.success('Producto agregado a la cesta')
        dispatch(addToCart({...productDetail, qty: newQty}))
    }

  return (
    <div className='grid gap-y-4 z-20'>
        <div className='md:hidden blok w-full flex justify-center mt-4'>
            <div className='h-1 w-[15%] bg-black opacity-20' />
        </div>
        <section className='md:mt-0'>
            <h1 className='text-xl font-bold capitalize'>{productDetail.name}</h1>
            <p className='text-xl font-bold'>{productDetail.price} €</p>
            <p className='font-light'>{productDetail.descriptionLong}</p>
        </section>
        <section>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {productDetail.billboardId === billboardProductId ? (
                        <>
                            {productDetail.quantity > 0 ? (
                                <section className='mt-5'>
                                    <ButtonC onClick={onSubmitP} text='Agregar a la cesta' bgColor='bg-black' textColor='text-white' disabled={false} />
                                    <div className='text-center mt-3'>
                                        {/* <Link href={'/'} className='underline'>Ir a pagar</Link> */}
                                    </div>
                                </section>
                            ) : (
                                <section className='mt-5'>
                                    <ButtonC text='Producto agotado' bgColor='bg-white' textColor='text-black' disabled={true} />
                                    <div className='text-center mt-3'>
                                        <Link href={'/'} className='underline'>Continuar comprando</Link>
                                    </div>
                                </section> 
                            )}
                        </>
                    ): (
                        <>
                            <h2 className='text-xl font-light capitalize mb-1'>{productDetail.color.name}</h2>
                            <ul className='flex mx-4'>
                                <li className='w-10 h-10 border-[1px] border-black rounded-full flex justify-center items-center'>
                                    <ColorsButton color={`${productDetail.color.value}`} />
                                </li>
                            </ul>
                            <div className='flex w-full justify-end items-center gap-1 -mt-2 mb-1'>
                                <RuleIcon className='w-4' stroke='black' />
                                <Link href='/' className='font-light text-[14px] underline'>Guía de tallas</Link>
                            </div>
                            <FormField control={form.control} name="size" render={({ field }) => (
                                <FormItem className='w-full max-h-64 border-[1px] border-black relative'>
                                    <Select onValueChange={field.onChange} value={field.value} >
                                        <FormControl>
                                            <SelectTrigger className='capitalize text-lg'>
                                                <SelectValue placeholder="Elige talla" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup className='capitalize'>
                                                <SelectLabel>Tallas</SelectLabel>
                                                {productSize.map((size) => (
                                                    <SelectItem key={size.id} className='text-lg' value={size.value}>{size.value} - <span className='text-xs'>{size.name}</span></SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage className='absolute -bottom-5 text-sm' />
                                </FormItem>
                            )} />
                            {productDetail.quantity > 0 ? (
                                <section className='mt-5'>
                                    <ButtonC type="submit" text='Agregar a la cesta' bgColor='bg-black' textColor='text-white' disabled={false} />
                                    <div className='text-center mt-3'>
                                        {/* <Link href={'/'} className='underline'>Ir a pagar</Link> */}
                                    </div>
                                </section>
                            ) : (
                                <section className='mt-5'>
                                    <ButtonC type="submit" text='Producto Agotado' bgColor='bg-white' textColor='text-black' disabled={true} />
                                    <div className='text-center mt-3'>
                                    <Link href={'/'} className='underline'>Continuar comprando</Link>
                                    </div>
                                </section> 
                            )}
                        </>
                    )}
                </form>
            </Form>
        </section>
        <section>
            <MainInfoProducts />
        </section>
    </div>
  )
}

export default InfoOfProducts



{/* <section>
    <h2 className='text-xl font-light capitalize mb-1'>{productDetail.color.name}</h2>
    <ul className='flex mx-4'>
        <li className='w-10 h-10 border-[1px] border-black rounded-full flex justify-center items-center'>
            <ColorsButton color={`${productDetail.color.value}`} onClick={() => selectColorHandler(productDetail.color.name)} />
        </li>
    </ul>
    <div className='flex w-full justify-end items-center gap-1 -mt-2 mb-1'>
        <RuleIcon className='w-4' stroke='black' />
        <Link href='/' className='font-light text-[14px] underline'>Guía de tallas</Link>
    </div>
    <div className={`w-full max-h-64 border-[1px] border-black`}>
        <Select onValueChange={selectSizeHandler}>
            <SelectTrigger className='capitalize text-lg'>
                <SelectValue placeholder="Elige talla" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className='capitalize'>
                    <SelectLabel>Tallas</SelectLabel>
                    {productSize.map((size) => (
                        <SelectItem key={size.id} className='text-lg' value={size.value}>{size.value} - <span className='text-xs'>{size.name}</span></SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
</section> */}