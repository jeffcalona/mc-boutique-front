import CartProduct from "./CartProduct"

function SliderMoreProducts({ products }) {
  return (
    <aside className="w-full overflow-x-auto custom-hide-scroll-bar">
      <h1 className='text-xl font-bold custom-capitalize-fist-letter mb-4'>los más comprados</h1>
      <ul className="flex w-full md:gap-x-4 gap-x-2 overflow-x-auto custom-hide-scroll-bar">
          {products.map((product) => {
              return (
                  <li key={product.id}>
                      <div className="w-[250px]">
                          <CartProduct heightLg='lg:h-[350px]' heightSm='sm:h-[340px]' height='h-[340px]' product={product} billboard={product.billboard.label} />
                      </div>
                  </li>
              )
          })}
      </ul>
    </aside>
  )
}

export default SliderMoreProducts