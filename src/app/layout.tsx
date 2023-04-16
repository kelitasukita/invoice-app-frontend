import AddInvoice from './components/AddInvoice'
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
      <body className='bg-11 h-screen ' >
        <Navbar />
        <main className='px-6 py-8 sm:px-12 sm:py-16'>
          <AddInvoice />
        </main>
        {children}
      </body>
    </html>
  )
}
