export default function Invoice() {
  return (
    <article className="desktop:mx-80 sm:shadow-my-shadow">
      <div className="flex justify-between items-center mt-8 desktop:mt-14 bg-13 rounded-lg h-32 p-6">
        <div className="flex-col">
          <h2 className="heading-s text-08 mb-6">
            <span className="text-07">#</span>
            RT3080
          </h2>
          <span className="text-06 body inline-block mb-2">Due 19 Aug 2021</span>
          <div>
            <strong className="text-08 heading-s">$1,800.90</strong>
          </div>
        </div>

        <div>
          <div className="mb-11">
            <span className="text-07 body float-right">Jensen Huang</span>
          </div>
          <div className="flex justify-center items-center bg-paid py-4 px-8 rounded-md bg-opacity-4">
            <div className="w-2 h-2 rounded-full bg-paid"></div>
            <span className="heading-s text-paid ml-1.5">Paid</span>
          </div>
        </div>
      </div>
    </article>
  )
}