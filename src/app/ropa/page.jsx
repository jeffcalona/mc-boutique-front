import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import CartProduct from "@/components/CartProduct"
import { idBillboardClothes } from "@/app/config"

const Ropa = async () => {

  const productsClothes = await getProducts({ billboardId: idBillboardClothes })
  const billboard = await getBillboard(idBillboardClothes)


  return (
    <section className="lg:mx-20 flex justify-center sm:mx-1 mx-0">
      <ul className=" w-full grid lg:grid-cols-3 lg:gap-5 grid-cols-2 gap-1">
        {productsClothes.map((product) => {
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

export default Ropa