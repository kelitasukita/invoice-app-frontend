import AddInvoice from "./components/AddInvoice";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className='px-6 py-8 sm:px-12 sm:py-16'>
        <AddInvoice />
      </main>
    </>
  )
}
