import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import CartProduct from "@/components/CartProduct"
import { billboardProductId } from '@/app/config'

async function CategoryProductos({ params }) {

  const products = await getProducts({ categoryId: params.category, billboardId: billboardProductId })

  const billboard = await getBillboard(billboardProductId)
  
  return (
    <section className="lg:mx-20 flex justify-center sm:mx-1 mx-0">
      <ul className=" w-full grid lg:grid-cols-3 lg:gap-5 grid-cols-2 gap-1">
        {products.map((product) => {
          return (
            <li key={product.id} className="w-full [&>p]:-my-1">
              <CartProduct heightLg='lg:h-[480px]' heightSm='sm:h-[480px]' height='h-[315px]' product={product} billboard={billboard.label} /> 
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default CategoryProductos