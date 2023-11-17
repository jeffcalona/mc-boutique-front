// 'use client'

// import Breadcrumb from '@/components/Breadcrumb'
// import SliderElements from '@/components/SliderElements'
// import { usePathname } from 'next/navigation'
// import React from 'react'

// async function RopaLoyout({ children }) {

//   const pathName = usePathname()

//   return (
//     <main>
//       {pathName.split('/')[3] !== undefined ?
//         <>
//           <div className='mt-24' />
//           <Breadcrumb />
//         </>
//         :
//         <>
//           <SliderElements pathName={pathName} />
//           <Breadcrumb />
//         </>
//       }
//       {children}
//     </main>
//   )
// }

// export default RopaLoyout

import getBillboard from '@/actions/get-billboard'
import getCategories from '@/actions/get-categories'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import NavBar from '@/components/navbar/NavBar'
import SliderElements from '@/components/SliderCategories/SliderElements'
import React from 'react'
import { idBillboardClothes } from '@/app/config'

async function RopaLoyout({ children }) {

  const categoriesClothes = await getCategories({ billboardId: idBillboardClothes })
  const billboard = await getBillboard(idBillboardClothes)

  return (
    <main>
      <NavBar />
      <SliderElements categories={categoriesClothes} billboard={billboard.label} />
      <Breadcrumb />
      {children}
    </main>
  )
}

export default RopaLoyout