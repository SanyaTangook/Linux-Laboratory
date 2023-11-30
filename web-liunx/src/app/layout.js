import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Liunx Lab',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
        This is Navbar
      </div>
        {children}
      <div> 
        This is Footer
      </div>
      </body>
    </html>
  )
}
