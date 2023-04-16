export default function Invoice() {
  return (
    <article>
      <div>
        <h2>#RT3080</h2>
        <span>Due 19 Aug 2021</span>
        <strong>$1,800.90</strong>
        <span>Jensen Huang</span>
        <div className="flex justify-center items-center">
          <div className="w-2 h-2 rounded-full bg-paid">.</div>
          <span>Paid</span>
        </div>
      </div>
    </article>
  )
}