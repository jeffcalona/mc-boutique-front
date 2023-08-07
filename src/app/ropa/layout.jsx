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

import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import SliderElements from '@/components/SliderCategories/SliderElements'
import React from 'react'

async function RopaLoyout({ children }) {

  return (
    <main>
      <SliderElements />
      <Breadcrumb />
      {children}
    </main>
  )
}

export default RopaLoyout