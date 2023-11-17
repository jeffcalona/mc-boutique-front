import Link from "next/link"
import AddToCartButton from "./AddToCartButton"
import getSize from "@/actions/get-size"

async function CartProduct({ heightLg, heightSm, height, product, billboard }) {

  const getProdcutSizes = async () => {
    try {
      const arraySizes = await Promise.all(product.sizes.map( async (thisSize) => {
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
    <>
        <div className={`relative w-full ${heightLg} ${heightSm} ${height} flex justify-center group/button`}>
            <Link href={`/${product.billboard.label}/${product.categoryId}/${product.id}`} className="w-full">
                <img src={product.images[0].url} alt={product.name} className="w-full h-full object-cover" /> 
            </Link>
            <AddToCartButton product={product} price={product.price} colorName={product.color.name} colorValue={product.color.value} sizes={productSize} billboard={billboard} />
        </div>
        <Link href={`/${product.billboard.label}/${product.categoryId}/${product.id}`} className="sm:text-xl uppercase font-medium">{product.name}</Link>
        <p className="custom-capitalize-fist-letter">{product.descriptionSmall}</p>
        <p className="text-xl">{product.price} €</p>
    </>
  )
}

export default CartProduct