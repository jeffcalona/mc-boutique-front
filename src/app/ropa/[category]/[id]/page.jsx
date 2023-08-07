import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import InfoOfProducts from '@/components/InfoOfProducts'
import SliderMoreProducts from '@/components/SliderMoreProducts'
import MainProductDetail from '@/components/productDetail/mainProductDetail'

async function ropaDetail({ params }) {
  
  const productDetail = await getProduct(params.id)
  const products = await getProducts()

  return (
    <section className='lg:mx-20 md:mx-2 md:grid md:gap-y-8 md:h-full overflow-x-hidden '>
      <MainProductDetail productDetail={productDetail} />
      <div className='md:overflow-x-hidden md:block hidden'>
        <SliderMoreProducts products={products} />
      </div>
      {/*mobile mod*/}
      <section className='md:hidden block px-2'>
        <InfoOfProducts productDetail={productDetail} />
        <SliderMoreProducts products={products} />
      </section>
    </section>
  )
}

export default ropaDetail

// h-[calc(100vh-144px)] -> esto es el 100% de la foto del producto ocupando toda la altura disponible en la pantalla -- esto va en el section principal