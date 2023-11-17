'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const MainBreadcrumb = () => {

    const pathname = usePathname()

    const segments = pathname.split('/').filter(Boolean)
    
    return (
        <>
            {
                segments.map((segment, index) => {
                    let category = index === 1 ? 'Categoría' : index === 2 ? 'Producto' : segment
                    return (
                        <React.Fragment key={index}>
                            <span>|</span>
                            <li>
                                <Link href={`/${segments.slice(0, index + 1).join('/')}`} className={`${index !== segments.length - 1 ? 'font-semibold' : 'font-normal pointer-events-none' }`}>{category}</Link>
                            </li>
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default MainBreadcrumb