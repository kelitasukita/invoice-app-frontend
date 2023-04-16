
export default function AddInvoice() {
  return (
    <article className="flex justify-between items-center">
      <div>
        <h2 className="text-08 heading-m sm:text-4xl sm:leading-8 sm:-tracking-1 sm:font-bold " >Invoices</h2>
        <span className="text-06 body-variant sm:text-sm sm:eading-4.5 sm:-tracking-0.1 sm:font-medium">7 invoices</span>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center mr-5">
          <p className="text-base font-bold text-08 leading-4 mr-2 ">
            Filter
          </p>
          <img className="w-3 h-3" src="/assets/icon-arrow-down.svg" alt="down arrow" />
        </div>
        <div>
          <div>
            <div className="flex justify-between items-center w-90 h-44 bg-02 rounded-full p-1.5 sm:w-150 sm:h-48">
              <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full " >
                <img className="" src="/assets/icon-plus.svg" alt="plus signal" />
              </div>
              <p className="text-base text-white font-bold mr-2">New</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )

}