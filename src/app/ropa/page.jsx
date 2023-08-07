import getProducts from "@/actions/get-products"
import CartProduct from "@/components/CartProduct"

// const allClothes = [
//   {
//     id: 1,
//     category: 'leggins',
//     name: 'leggins 1',
//     smallDescription: 'descripción del leggins corta',
//     largeDescription: 'descripción del leggins larga, que se usa para el detalle del producto',
//     image: '/ropaImages/ropaImg11.jpg',
//     price: 35
//   },
//   {
//     id: 2,
//     category: 'camisetas',
//     name: 'camiseta 1',
//     smallDescription: 'descripción del leggins corta',
//     largeDescription: 'descripción del leggins larga, que se usa para el detalle del producto',
//     image: '/ropaImages/ropaImg22.jpg',
//     price: 50
//   },
//   {
//     id: 3,
//     category: 'pantalones',
//     name: 'pantalón 1',
//     smallDescription: 'descripción del leggins corta',
//     largeDescription: 'descripción del leggins larga, que se usa para el detalle del producto',
//     image: '/ropaImages/ropaImg33.jpg',
//     price: 40
//   },
//   {
//     id: 4,
//     category: 'leggins',
//     name: 'leggins 2',
//     smallDescription: 'descripción del leggins corta',
//     largeDescription: 'descripción del leggins larga, que se usa para el detalle del producto',
//     image: '/ropaImages/ropaImg11.jpg',
//     price: 35
//   },
//   {
//     id: 5,
//     category: 'leggins',
//     name: 'leggins 3',
//     smallDescription: 'descripción del leggins corta',
//     largeDescription: 'descripción del leggins larga, que se usa para el detalle del producto',
//     image: '/ropaImages/ropaImg22.jpg',
//     price: 35
//   },
//   {
//     id: 6,
//     category: 'deportivo',
//     name: 'chaqueta deportivo 1',
//     smallDescription: 'descripción del leggins corta',
//     largeDescription: 'descripción del leggins larga, que se usa para el detalle del producto',
//     image: '/ropaImages/ropaImg33.jpg',
//     price: 10
//   },
// ]

const Ropa = async () => {
  const products = await getProducts()

  return (
    <section className="lg:mx-20 flex justify-center sm:mx-1 mx-0">
      <ul className=" w-full grid lg:grid-cols-3 lg:gap-5 grid-cols-2 gap-1">
        {products.map((product) => {
          return (
            <li key={product.id} className="w-full [&>p]:-my-1">
              <CartProduct heightLg='lg:h-[480px]' heightSm='sm:h-[480px]' height='h-[315px]' product={product} /> 
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Ropa