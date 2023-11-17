import getAllProducts from "@/actions/get-allProducts"
import SliderMoreProducts from "../SliderMoreProducts"

const SliderMoreProductsCheckout = async () => {

    const products = await getAllProducts()

    return (
        <SliderMoreProducts products={products} />
    )
}

export default SliderMoreProductsCheckout