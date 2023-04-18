'use client';

import { useEffect, useState } from "react";

function getSize() {
  if (typeof window !== "undefined") {
    return window.innerWidth;
  }
  return 0;
}

export default function AddInvoice() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(getSize());
      console.log(getSize());
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <article className="flex justify-between items-center desktop:w-6-12 desktop:mx-auto desktop:w-730">
      <div>
        <h2 className="text-08 heading-m sm:text-4xl sm:leading-8 sm:-tracking-1 sm:font-bold " >Invoices</h2>
        <div className="text-06 body-variant sm:text-sm sm:eading-4.5 sm:-tracking-0.1 sm:font-medium">
          {width > 640
            ?
            (<span>There are 7 total invoices</span>)
            :
            (<span> 7 invoices</span>)
          }
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center mr-5">
          <p className="text-base font-bold text-08 leading-4 mr-2 ">
            {width > 640
              ?
              (<span>Filter by status</span>)
              :
              (<span>Filter</span>)
            }
          </p>
          <img className="w-3 h-3" src="/assets/icon-arrow-down.svg" alt="down arrow" />
        </div>
        <div>
          <div>
            <div className="flex justify-between items-center w-90 h-44 bg-02 rounded-full p-1.5 sm:w-150 sm:h-48">
              <div className="flex justify-center items-center w-8 h-8 bg-13 rounded-full " >
                <img className="" src="/assets/icon-plus.svg" alt="plus signal" />
              </div>
              <div>
                <p className="text-base text-13 font-bold mr-2 sm:mt-1">
                  {width > 639
                    ?
                    (<span>New Invoice</span>)
                    :
                    (<span>New</span>)
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )

}