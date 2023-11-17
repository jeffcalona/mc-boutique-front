'use client'

import Link from "next/link"

import CloseIcon from "../Icons/CloseIcon"
import { usePathname } from "next/navigation"

const MainCategories = ({ categories, billboard }) => {

    const pathName = usePathname()

    const segmentLength = pathName.split('/').length

    return (
        <>
            {segmentLength >= 4 ?
                null
                :
                <nav className="flex sm:gap-4 gap-2 overflow-x-auto overflow-y-hidden custom-hide-scroll-bar">
                    {categories.map((data) => {

                        const isActive = pathName === `/${billboard}/${data.id}`

                        return (
                            <Link key={data.id} href={isActive ? `/${billboard}` : `/${billboard}/${data.id}`}>
                                <div className="w-44 h-32 relative flex justify-center items-center group box-content overflow-hidden">
                                    <img src={data.imageUrl} alt={data.name} className={`object-cover z-10 ${isActive ? 'scale-110' : 'group-hover:scale-110'} transition duration-500 ease-in-out`} />
                                    <div className={`w-full h-full ${isActive ? 'bg-black opacity-0' : 'bg-black opacity-25 group-hover:opacity-0'} absolute z-10 transition-opacity duration-300 ease-in-out`} />
                                    {isActive &&
                                        <CloseIcon className='z-10 absolute h-7 top-2 right-3'/>
                                    }
                                    <p className={`absolute z-10 text-center text-white font-semibold capitalize ${isActive ? 'underline' : 'group-hover:opacity-0'} transition-opacity duration-300 ease-in-out`}>{data.name}</p>
                                </div>
                            </Link>
                        )
                    })}
                </nav>
            }
        </>
    )
}

export default MainCategories