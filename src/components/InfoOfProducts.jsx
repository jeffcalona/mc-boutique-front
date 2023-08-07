'use client'

import React, { useState } from 'react'
import ColorsButton from '@/components/buttons/ColorsButton'
import RuleIcon from '@/components/Icons/RuleIcon'
import Link from 'next/link'
import ArrowDownIcon from '@/components/Icons/ArrowDownIcon'
import ButtonC from './buttons/ButtonC'

const dataSizes = [
    {
        id: 1,
        size: '36/s'
    },
    {
        id: 2,
        size: '38/m'
    },
    {
        id: 3,
        size: '40/l'
    },
    {
        id: 4,
        size: '42/xl'
    }
]

const dataCondition = [
    {
        id: 1,
        title: 'Condiciones y cuidado',
        description: 'Nosotros te recogemos gratis si el lugar de recogida es Bogotá, Medellín, Cali, Barranquilla y Bucaramanga y si tu ropa no tiene descuento. Cambios: Tienes 30 días desde que llega tu ropa para hacer el cambio. Garantías: Tienes 60 días desde que llega tu ropa para hacer la garantía. El cambio o devolución no aplica si la ropa no está nueva o si es un Body o Vestido de baño por ser ropa interior.'
    },
    {
        id: 2,
        title: 'Envíos y devoluciones',
        description: 'Nosotros te recogemos gratis si el lugar de recogida es Bogotá, Medellín, Cali, Barranquilla y Bucaramanga y si tu ropa no tiene descuento. Cambios: Tienes 30 días desde que llega tu ropa para hacer el cambio. Garantías: Tienes 60 días desde que llega tu ropa para hacer la garantía. El cambio o devolución no aplica si la ropa no está nueva o si es un Body o Vestido de baño por ser ropa interior.'
    },
    {
        id: 3,
        title: 'Cambios y garantías',
        description: 'Nosotros te recogemos gratis si el lugar de recogida es Bogotá, Medellín, Cali, Barranquilla y Bucaramanga y si tu ropa no tiene descuento. Cambios: Tienes 30 días desde que llega tu ropa para hacer el cambio. Garantías: Tienes 60 días desde que llega tu ropa para hacer la garantía. El cambio o devolución no aplica si la ropa no está nueva o si es un Body o Vestido de baño por ser ropa interior.'
    },
]

function InfoOfProducts({ productDetail }) {

    const [selectSize, setSelectSize] = useState(false)
    const [conditionDropDown, setConditionDropDown] = useState(null)

    const toggleDescription = (data) => {
        setConditionDropDown((prevId) => (prevId === data.id ? null : data.id));
    }

  return (
    <div className='grid gap-y-4'>
        <div className='md:hidden blok w-full flex justify-center mt-4'>
            <div className='h-1 w-[15%] bg-black opacity-20' />
        </div>
        <section className='md:mt-0'>
            <h1 className='text-xl font-bold capitalize'>{productDetail.name}</h1>
            <p className='text-xl font-bold'>{productDetail.price} €</p>
            <p className='font-light'>{productDetail.descriptionLong}</p>
        </section>
        <section>
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
            <div className={`w-full max-h-64 border-[1px] border-black`}>
                <button onClick={() => setSelectSize(!selectSize)} className='w-full h-full flex justify-between items-center px-4'>
                    <span className='opacity-50 py-2'>
                        Elige talla
                    </span>
                    <ArrowDownIcon stroke='black' className={`w-5 ${selectSize ? 'rotate-180' : ''} transition-all custom-transition`} />
                </button>
                {selectSize &&
                    <ul>
                        {
                            dataSizes.map((data) => {
                                return (
                                    <li key={data.id}>
                                        <button className='w-full h-full text-left px-4 py-1 hover:bg-slate-100 font-light uppercase text-lg'>{data.size}</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
            </div>
        </section>
        <section>
            <ButtonC text='Agregar a la cesta' bgColor='bg-black' textColor='text-white' />
            <div className='text-center mt-3'>
                <Link href={'/'} className='underline'>Ir a pagar</Link>
            </div>
        </section>
        <section>
            <ul>
                {dataCondition.map((data) => {
                    const isDescriptionOpen = conditionDropDown === data.id
                    return (
                        <li key={data.id} className='w-full max-h-[400px] border-t-[1px] border-black'>
                            <button onClick={() => toggleDescription(data)} className='w-full px-4 py-2 flex justify-between items-center'>
                                <span className='font-semibold'>{data.title}</span>
                                <ArrowDownIcon stroke='black' className={`w-5 ${isDescriptionOpen ? 'rotate-180' : ''} transition-all custom-transition`} />
                            </button>
                            {isDescriptionOpen &&
                                <p className='font-light px-4 mb-4'>
                                    {data.description.split('. ').map((sentence, index) => (
                                        <React.Fragment key={index}>
                                            {sentence}
                                            <br /><br />
                                        </React.Fragment>
                                    ))}
                                </p>
                            }
                        </li>
                    )
                })}
            </ul>
        </section>
    </div>
  )
}

export default InfoOfProducts