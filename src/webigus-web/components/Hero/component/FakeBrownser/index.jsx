import { useEffect, useState } from 'react'
import Image from 'next/image'

import { names } from '@/staticdata'

export function FakeBrowser() {
    const [mainDomain, setMainDomain] = useState(null)

    const [widthSize, setWidthSize] = useState(null)
  
    useEffect(() => {
      setMainDomain('example.webigus.com');
      setWidthSize(1183)
    }, []);

    // TODO - Enhancing functionality
    const setVirtualSize = (w) => {
        //console.log(w)
        //setWidthSize(w)
    }
  

  return (
    <>
      <div className="relative bg-grid-slate overflow-hidden" >

        <div className="flex items-start flex-none ml-[32rem] w-32">
            <div className="flex flex-col items-center -ml-[0.19rem] mb-1"><div className="w-px h-[1.7rem] bg-gray-300"></div><div className="mt-[3px] w-[5px] h-[5px] shadow-sm rounded-full ring-1 bg-gray-300 ring-gray-300"></div></div><div className="ml-0.5 rounded cursor-pointer font-mono text-[0.625rem] leading-6 px-1.5 ring-1 ring-inset bg-slate-50 text-gray-300 ring-gray-300" onClick={()=>{setVirtualSize(510)}}>{ names.mobile }</div>
            <div className="flex flex-col items-center ml-[12.75rem] mb-1"><div className="w-px h-[1.7rem] bg-gray-300"></div><div className="mt-[3px] w-[5px] h-[5px] shadow-sm rounded-full ring-1 bg-gray-300 ring-gray-300"></div></div><div className="ml-0.5 rounded cursor-pointer font-mono text-[0.625rem] leading-6 px-1.5 ring-1 ring-inset bg-slate-50 text-gray-300 ring-gray-300" onClick={()=>{setVirtualSize(766)}}>{ names.tablet }</div>
            <div className="flex flex-col items-center ml-[22.75rem] mb-1"><div className="w-px h-[1.7rem] bg-primary-600"></div><div className="mt-[3px] w-[5px] h-[5px] shadow-sm rounded-full ring-1 bg-primary-700 ring-primary-600"></div></div><div className="-ml-[3.6rem] rounded cursor-pointer font-mono text-[0.625rem] leading-6 px-1.5 ring-1 ring-inset bg-slate-50 text-primary-600 ring-primary-600" onClick={()=>{setVirtualSize(1183)}}>{ names.desktop }</div>
        </div>

        <div
          className="demo-sm:min-w-0 demo-sm:max-w-none min-w-full max-w-full shadow-xl sm:rounded-xl"
          style={{ width: `${widthSize}px` }}
        >
          <div className="ring-1 ring-slate-900/5 sm:rounded-xl">
            <div className="bg-gradient-to-b from-white to-[#FBFBFB] sm:rounded-t-xl">
              <div
                className="grid items-center gap-8 px-4 py-2.5"
                style={{ gridTemplateColumns: '7.125rem 1fr 7.125rem' }}
              >
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#EC6A5F]"></div>
                  <div className="ml-1.5 h-2.5 w-2.5 rounded-full bg-[#F4BF50]"></div>
                  <div className="ml-1.5 h-2.5 w-2.5 rounded-full bg-[#61C454]"></div>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    className="ml-4 flex-none text-slate-400 dark:text-slate-500"
                  >
                    <path
                      d="m15 7-5 5 5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    className="ml-2 flex-none text-slate-400 dark:text-slate-500"
                  >
                    <path
                      d="m10 7 5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="mx-auto flex w-4/5 items-center justify-center rounded-md bg-slate-100 py-1 text-xs font-medium leading-6 ring-1 ring-inset ring-slate-900/5 dark:bg-slate-800 dark:text-slate-500">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mr-1.5 h-3.5 w-3.5 text-slate-300 dark:text-slate-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {mainDomain}
                  </div>
                </div>
                <div className="flex justify-end">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    className="text-slate-400 dark:text-slate-500"
                  >
                    <path
                      d="M12.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>

            </div>
            <div className="relative -mb-8 rounded-b-xl border-t border-slate-200 bg-white pb-8 dark:border-slate-900/50 dark:bg-slate-800">
              <iframe
                src="/examples/website/fast-load"
                title="Mobile-first Demo"
                className="h-[30.625rem] w-full"
                style={{ pointerEvents: 'auto' }}
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
