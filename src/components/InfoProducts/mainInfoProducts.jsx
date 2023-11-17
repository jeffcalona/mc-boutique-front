'use client'

import React, { useState } from 'react'
import ArrowDownIcon from "../Icons/ArrowDownIcon"

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

const MainInfoProducts = () => {

    const [conditionDropDown, setConditionDropDown] = useState(null)

    const toggleDescription = (data) => {
        setConditionDropDown((prevId) => (prevId === data.id ? null : data.id));
    }

    return (
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
    )
}

export default MainInfoProducts