import getBillboard from '@/actions/get-billboard'
import getCategories from '@/actions/get-categories'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import NavBar from '@/components/navbar/NavBar'
import SliderElements from '@/components/SliderCategories/SliderElements'
import React from 'react'
import { billboardProductId } from '@/app/config'

async function ProductsLoyout({ children }) {

    const categoriesProducts = await getCategories({ billboardId: billboardProductId })
    const billboard = await getBillboard(billboardProductId)

  return (
    <main>
      <NavBar />
      <SliderElements categories={categoriesProducts} billboard={billboard.label} />
      <Breadcrumb />
      {children}
    </main>
  )
}

export default ProductsLoyout