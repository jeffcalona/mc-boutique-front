import Link from 'next/link'
import MainBreadcrumb from './MainBreadcrumb'

async function Breadcrumb() {

  return (
    <nav className='my-5 lg:mx-20 md:mx-8 mx-2 z-40'>
        <ul className='flex items-center gap-3 [&>li]:font-light [&>li]:text-lg [&>li]:capitalize [&>span]:text-xl'>
            <li>
                <Link href='/' >inicio</Link>
            </li>
            <MainBreadcrumb />
        </ul>
    </nav>
  )
}

export default Breadcrumb