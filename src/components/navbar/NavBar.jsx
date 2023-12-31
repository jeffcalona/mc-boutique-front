'use client'

import { useState } from "react"
import { useSelector } from "react-redux"
import { usePathname } from "next/navigation";
import Link from "next/link"

import McbLogo from "../Icons/McbLogo"
import UsersIcon from "../Icons/UsersIcon"
import SearchIcon from "../Icons/SearchIcon"
import ShoppingCartIcon from "../Icons/ShoppingCartIcon"
import MenuIcon from "../Icons/MenuIcon"
import CloseIcon from "../Icons/CloseIcon"
import PreviewCart from "../PreviewCart"

const navData = [
  {
    id: 1,
    title: 'ropa',
    url: 'ropa'
  },
  {
    id: 2,
    title: 'productos',
    url: 'productos'
  }
]

const NavBar = () => {
  const pathname = usePathname();

  const [openMenuMobile, setOpenMenuMobile] = useState(false)
  const [openCart, setOpenCart] = useState(false)

  const { cartItems } = useSelector((state) => state.cart)

  return (
    <header className="z-20 fixed bg-white w-full h-20 top-0 lg:px-20 px-5 flex items-center border-b-[1px] border-b-gray-300">
      <nav className="md:hidden flex flex-grow basis-0 gap-x-3">
        <button onClick={() => setOpenMenuMobile(!openMenuMobile)}>
          <MenuIcon stroke='black' className='w-10' />
        </button>
      </nav>
      <nav className="md:flex flex-row gap-x-7 flex-grow basis-0 hidden">
        {navData.map((data) => {

          const isActive = pathname.split('/')[1] === data.title;

          return (
            <Link key={data.id} href={`/${data.url}`} className={`font-normal text-xl capitalize cursor-pointer ${isActive ? 'underline' : ''}`}>{data.title}</Link>
          )
        })
        }
      </nav>
      <Link href='/' className="md:px-0 px-3">
        <McbLogo logoWidth={200} logoHeight={200} />
      </Link>
      <nav className="flex md:gap-x-7 gap-x-3 flex-grow basis-0 justify-end">
        <UsersIcon width={30} stroke='black' className='cursor-pointer' />
        <SearchIcon width={30} stroke='black' className='md:block hidden cursor-pointer' />
        <button className="relative w-[30px] h-[30px] cursor-pointer" onClick={() => setOpenCart(!openCart)}>
          <ShoppingCartIcon width={30} stroke='black' />
          {cartItems.length === 0 ? (
              <span></span>
            )
            : (
                <span className="absolute -top-2 -right-2 bg-black w-5 h-5 rounded-full text-white flex justify-center items-center">
                  {cartItems.reduce((acc, element) => acc + element.qty, 0)}
                </span>
              )
          }
        </button>
        <PreviewCart openCart={openCart} setOpenCart={setOpenCart} />
      </nav>
      {/* Mobile navBar */}
      <nav className={`${openMenuMobile ? 'md:-left-full left-0' : '-left-full'} w-full h-screen absolute top-0 bg-black flex flex-col gap-y-5 items-center transition-all custom-transition py-20`}>
        <button onClick={() => setOpenMenuMobile(!openMenuMobile)} className={`top-0 left-0 mx-6 my-4 absolute ${openMenuMobile ? 'left-0 delay-75 transition-all custom-transition' : '-left-full'}`}>
          <CloseIcon className='h-10' />
        </button>
        {navData.map((data) => {

          const isActive = pathname.split('/')[1] === data.title;

          return (
            <Link key={data.id} href={`/${data.url}`} onClick={() => setOpenMenuMobile(!openMenuMobile)} className={`font-normal text-white text-2xl capitalize cursor-pointer ${isActive ? 'underline' : ''}`}>{data.title}</Link>
          )
        })
        }
      </nav>
    </header>
  )
}

export default NavBar