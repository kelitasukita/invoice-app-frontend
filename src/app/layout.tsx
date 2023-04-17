

import AddInvoice from './components/AddInvoice'
import Invoice from './components/Invoice'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Invoice App',
  description: 'Generated by create next app',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='bg-11 desktop:flex h-screen' >
          <Navbar />
          <main className='px-6 py-8 sm:px-12 sm:py-16 desktop:w-screen'>
            <AddInvoice />
            <Invoice />
          </main>
        </div>
        {children}
      </body>
    </html>
  )
}
