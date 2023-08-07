import getProducts from "@/actions/get-products"
import CartProduct from "@/components/CartProduct"

async function CategoryRopa({ params }) {

  const products = await getProducts(params.category)
  
  return (
    <section className="lg:mx-20 flex justify-center sm:mx-1 mx-0">
      <ul className=" w-full grid lg:grid-cols-3 lg:gap-5 grid-cols-2 gap-1">
        {products.map((product) => {
          return (
            <li key={product.id} className="w-full [&>p]:-my-1">
              <CartProduct heightLg='lg:h-[480px]' heightSm='sm:h-[480px]' height='h-[315px]' product={product}/> 
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default CategoryRopa