export default function Invoice() {
  return (
    // <article className="desktop:mx-80 sm:shadow-my-shadow">
    //   <div className="flex justify-between items-center mt-8 desktop:mt-14 bg-13 rounded-lg h-32 p-6">
    //     <div className="flex-col">
    //       <h2 className="heading-s text-08 mb-6">
    //         <span className="text-07">#</span>
    //         RT3080
    //       </h2>
    //       <span className="text-06 body inline-block mb-2">Due 19 Aug 2021</span>
    //       <div>
    //         <strong className="text-08 heading-s">$1,800.90</strong>
    //       </div>
    //     </div>

    //     <div>
    //       <div className="mb-11">
    //         <span className="text-07 body float-right">Jensen Huang</span>
    //       </div>
    //       <div className="flex justify-center items-center bg-paid py-4 px-8 rounded-md bg-opacity-4">
    //         <div className="w-2 h-2 rounded-full bg-paid"></div>
    //         <span className="heading-s text-paid ml-1.5">Paid</span>
    //       </div>
    //     </div>
    //   </div>
    // </article>

    <article className="grid grid-cols-3 grid-rows-3 mt-8 h-32 p-6 bg-13 rounded-lg shadow-my-shadow hover:border hover:border-01 hover:border-solid sm:grid sm:grid-cols-5 sm:grid-rows-1 sm:h-72 sm:justify-center sm:items-center sm:mt-14 sm:px-6 desktop:mx-auto desktop:w-730">
      <h2 className="heading-s text-08">
        <span className="text-07 ">#</span>
        RT3080
      </h2>
      <span className="col-start-1 col-end-2 text-06 body inline-block mt-4 sm:col-start-2 sm:mt-0">Due 19 Aug 2021</span>
      <strong className="col-start-1 col-end-2 text-08 heading-s mt-4 sm:col-start-4 sm:col-end-4 sm:mt-0 sm:text-center">$1,800.90</strong>

      <span className="col-start-3 col-end-3 row-start-1 text-right text-07 body sm:col-start-3 sm:text-center">Jensen Huang</span>

      <div className="col-start-3 col-end-3 row-start-2 row-end-3 flex justify-end items-center sm:col-start-5 sm:col-end-5 sm:row-start-1 sm:mt-0 sm:justify-between">
        <div className="flex justify-center items-center w-103 h-10 mt-12 mr-0 bg-paid rounded-md bg-opacity-4 sm:mt-0 sm:m-auto">
          <div className="w-2 h-2 rounded-full bg-paid"></div>
          <span className="heading-s ml-2 rounded-md text-paid">Paid</span>
        </div>
        <img className="hidden sm:block sm:grid-start-5" src="/assets/icon-arrow-right.svg" alt="arrow right" />
      </div>

      {/* <div className="col-start-3 col-end-3 row-start-2 row-end-3 flex justify-end items-center sm:col-start-5 sm:col-end-5 sm:row-start-1 sm:mt-0 sm:justify-between">
        <div className="flex justify-center items-center w-103 h-10 mt-12 mr-0 bg-14 rounded-md bg-opacity-4 sm:mt-0 sm:m-auto">
          <div className="w-2 h-2 rounded-full bg-14"></div>
          <span className="heading-s ml-2 rounded-md text-14">Pending</span>
        </div>
        <img className="hidden sm:block sm:grid-start-5" src="/assets/icon-arrow-right.svg" alt="arrow right" />
      </div>

      <div className="col-start-3 col-end-3 row-start-2 row-end-3 flex justify-end items-center sm:col-start-5 sm:col-end-5 sm:row-start-1 sm:mt-0 sm:justify-between">
        <div className="flex justify-center items-center w-103 h-10 mt-12 mr-0 bg-nav-bg-light rounded-md bg-opacity-4 sm:mt-0 sm:m-auto">
          <div className="w-2 h-2 rounded-full bg-nav-bg-light"></div>
          <span className="heading-s ml-2 rounded-md text-nav-bg-light">Draft</span>
        </div>
        <img className="hidden sm:block sm:grid-start-5" src="/assets/icon-arrow-right.svg" alt="arrow right" />
      </div> */}
    </article>
  )
}