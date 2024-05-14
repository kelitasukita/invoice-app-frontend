import AddInvoice from "../components/AddInvoice";
import Invoice from "../components/Invoice";

export default function InvoicesPage() {

  // state + useEffect pra fazer a Chamada de API
  // https://nextjs.org/docs/basic-features/pages#static-generation-with-data

  return (
    <>
      <AddInvoice />
      {/* Loop gerando os Invoices abaixo com o resultado da chamada de API */}
      <Invoice />
    </>
  )
}