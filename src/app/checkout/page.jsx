import MainCheckout from "@/components/checkout/MainCheckout"
import SliderMoreProductsCheckout from "@/components/checkout/SliderMoreProductsCheckout"

const Checkout = () => {

    return (
        <>
            <MainCheckout />
            <div className="px-2 mt-10">
                <SliderMoreProductsCheckout />            
            </div>
        </>
    )
}

export default Checkout