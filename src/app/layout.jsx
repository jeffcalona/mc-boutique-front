import NavBar from '@/components/navbar/NavBar'
import './globals.css'
import { Cormorant_Infant } from 'next/font/google'

const cormorant_Infant = Cormorant_Infant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
})

export const metadata = {
  title: 'Maria Camila Boutique',
  description: 'Página web de Maria Camila Boutique',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet='UTF-8' />
      </head>
      <body className={cormorant_Infant.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
