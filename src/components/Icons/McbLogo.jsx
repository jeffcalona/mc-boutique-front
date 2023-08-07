import Image from 'next/image'
import logoMcb from 'public/icons/logoMcb.svg'

function McbLogo({ logoWidth, logoHeight }) {
  return (
    <Image src={logoMcb} alt='logo' width={logoWidth} height={logoHeight} className='cursor-pointer' />
  )
}

export default McbLogo