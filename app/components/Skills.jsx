import React from 'react'
import { CheckBadgeIcon, CpuChipIcon} from "@heroicons/react/24/solid";



export const Skills = () => {
  return (
    <section id='skills' className='py-8 lg:py-18 lg:h-screen flex items-center'>
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <CpuChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className=" leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-[18px]">
            I have acquired a diverse set of skills and technologies in the field of IT. Here's a glimpse of my expertise:
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-black/70 rounded flex p-4 h-full items-center">
                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  Html&CSS
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-black/70 rounded flex p-4 h-full items-center">
                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  JavaScript
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-black/70 rounded flex p-4 h-full items-center">
                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  React.js
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-black/70 rounded flex p-4 h-full items-center">
                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  Next.js
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-black/70 rounded flex p-4 h-full items-center">
                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  Bootsrap&Tailwind
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-black/70 rounded flex p-4 h-full items-center">
                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  Git
                </span>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
