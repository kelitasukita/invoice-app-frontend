export default function Page() {
  return (
    <article>
      <div>
        <img src="/assets/icon-arrow-left.svg" alt="arrow to go back" />
        <span>Go back</span>
      </div>
      <div>
        <span>Status</span>
        <div className="col-start-3 col-end-3 row-start-2 row-end-3 flex justify-end items-center sm:col-start-5 sm:col-end-5 sm:row-start-1 sm:mt-0 sm:justify-between">
          <div className="flex justify-center items-center w-103 h-10 mt-12 mr-0 bg-14 rounded-md bg-opacity-4 sm:mt-0 sm:m-auto">
            <div className="w-2 h-2 rounded-full bg-14"></div>
            <span className="heading-s ml-2 rounded-md text-14">Pending</span>
          </div>
          <img className="hidden sm:block sm:grid-start-5" src="/assets/icon-arrow-right.svg" alt="arrow right" />
        </div>
      </div>

    </article>
  )
}