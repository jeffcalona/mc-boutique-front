import Link from "next/link"
import McbLogo from "../Icons/McbLogo"

const CheckouNavbar = () => {
    return (
        <header className="z-20 fixed bg-white w-full h-20 top-0 lg:px-20 px-5 flex items-center justify-center border-b-[1px] border-b-gray-300">
            <Link href='/' className="md:px-0 px-3">
                <McbLogo logoWidth={200} logoHeight={200} />
            </Link>
        </header>
    )
}

export default CheckouNavbar