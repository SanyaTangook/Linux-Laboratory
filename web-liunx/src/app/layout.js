import { Inter } from 'next/font/google'
import './globals.css'
import nav from './Components/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Liunx Lab',
}

export default function RootLayout({ children }) {
  const Navbar = nav
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      <div> 
        This is Footer
      </div>
      </body>
    </html>
  )
}
