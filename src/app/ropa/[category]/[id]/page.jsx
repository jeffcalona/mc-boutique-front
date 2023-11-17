import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import getSize from '@/actions/get-size'
import InfoOfProducts from '@/components/InfoProducts/InfoOfProducts'
import SliderMoreProducts from '@/components/SliderMoreProducts'
import MainProductDetail from '@/components/productDetail/mainProductDetail'

async function ropaDetail({ params }) {

  const productDetail = await getProduct(params.id)
  const products = await getProducts({ categoryId: params.category })

  const getProdcutSizes = async () => {
    try {
      const arraySizes = await Promise.all(productDetail.sizes.map( async (thisSize) => {
        try {
          const sizes = await getSize(thisSize.sizenew)
          return sizes
        } catch (error) {
          console.log(`Error getting sizes for ${thisSize.sizenew}: `, error)
          return null
        }
      }))
      return arraySizes
    } catch (error) {
      console.log('Error getting sizes: ', error)
      return []
    }
  } 
  
  const productSize = await getProdcutSizes()

  return (
    <section className='lg:mx-20 md:mx-2 md:grid md:gap-y-8 md:h-full overflow-x-hidden'>
      <MainProductDetail productDetail={productDetail} productSize={productSize} />
      <div className='md:overflow-x-hidden md:block hidden'>
        <SliderMoreProducts products={products} />
      </div>
      {/*mobile mod*/}
      <section className='md:hidden block px-2'>
        <InfoOfProducts productDetail={productDetail} productSize={productSize} />
        <SliderMoreProducts products={products} />
      </section>
    </section>
  )
}

export default ropaDetail

// h-[calc(100vh-144px)] -> esto es el 100% de la foto del producto ocupando toda la altura disponible en la pantalla -- esto va en el section principal