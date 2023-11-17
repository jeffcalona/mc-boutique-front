import CheckouNavbar from "@/components/navbar/CheckouNavbar"

function CheckoutLayout({ children }) {
    return (
        <main>
            <CheckouNavbar />
            <div className="mt-28">
                {children}
            </div>
        </main>
    )
}

export default CheckoutLayout