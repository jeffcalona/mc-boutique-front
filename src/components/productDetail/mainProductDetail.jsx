'use client'

import { useEffect, useRef, useState } from "react"

import InfoOfProducts from "../InfoOfProducts"

const MainProductDetail = ({ productDetail }) => {

    const imageContainerRef = useRef(null)

    const [currentImgId, setCurrentImgId] = useState(1)

    useEffect(() => {
        const handleScroll = () => {
            const images = imageContainerRef.current.querySelectorAll('.snap-center')

            let currentId = currentImgId

            images.forEach((image) => {
                const rect = image.getBoundingClientRect()

                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    currentId = parseInt(image.querySelector('img').getAttribute('alt'))
                }
            })
            if (currentId !== currentImgId) {
                setCurrentImgId(currentId);
            }
        }
        if (imageContainerRef.current) {
            imageContainerRef.current.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (imageContainerRef.current) {
                imageContainerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, [currentImgId])
    
    return (
        <section ref={imageContainerRef} className='md:grid md:grid-cols-6 lg:gap-x-8 md:gap-x-2 md:h-full h-[calc(75vh-144px)] overflow-y-auto snap-y snap-mandatory'>
            <ul className='md:col-span-4 md:grid md:grid-cols-2 md:gap-[7px] h-full'>
                {/*mobile mod*/}
                <ul className='md:hidden flex h-full w-2 flex-col gap-y-1 absolute z-10 justify-end items-center left-3 bottom-[4%]'>
                    {productDetail.images.map((image, index) => {
                        return (
                        <li key={image.id} className={`${currentImgId === index + 1 ? 'w-2 h-2' : 'w-1 h-1'} bg-black rounded-full`} />
                        )
                    })}
                </ul>
                {productDetail.images.map((image, index) => {
                return (
                    <li key={image.id} className=' w-full md:h-[450px] h-full snap-center'>
                        <img src={image.url} alt={index + 1} className='w-full h-full object-cover' />
                    </li>
                )
                })}
            </ul>
            <section className='md:col-span-2 md:h-[907px] md:overflow-y-auto md:block hidden'>
                <InfoOfProducts productDetail={productDetail} />
            </section>
        </section>
    )

}

export default MainProductDetail