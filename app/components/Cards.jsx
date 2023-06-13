import React from 'react'
import {CodeBracketIcon} from "@heroicons/react/24/solid";
import Image from 'next/image'
import {motion} from 'framer-motion'



export const Cards = () => {
  return (
    <section id="cards" className="py-8 lg:py-24 flex items-center">
      <div className="container mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-[18px]">
            These are some of the app that i've build.
          </p>
        </div>

        {/* <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-100'></div>
              <div className='relative h-96 w-full'>
                <Image src='/Project2.jpg'
                layout='fill'
                objectFit='contain'
                className='group-hover:scale-125 transition-all duration-500'/>
                </div>
            
            <div className='absolute -bottom-full left-12 group-hover:botton-24 transition-all duration-500 z-50'>
              <span>HTML JS CSS</span> 
              </div>
            <div className='absolute -bottom-full left-12 group-hover:botton-24 transition-all duration-700 z-50'>
              <span>Anime Project</span> 
              </div>

          </div> */}
<div className= "lg:h-screen flex flex-wrap row-auto justify-center mx-auto">

 <div class="antialiased text-gray-900 p-2">
          <div>
            <Image
              src="/project1.jpg"
              width={500}
              height={500}
              className="relative rounded-lg shadow-lg "
            />

            <div class="relative px-4 -mt-16  ">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="flex items-baseline">
                  <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider text-center">
                  REACT &bull; CSS &bull; JS
                  </div>
                </div>

                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  Star Wars 
                </h4>

                <div class="mt-2">
                  <a href="">
                    <button class="text-purple-700 text-2xl font-semibold p-2">
                      Live
                    </button>
                  </a>
                  <a href="">
                    <button class="text-2xl text-gray-600 p-2">Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="antialiased text-gray-900 p-2">
          <div>
            <Image
              src="/Project2.jpg"
              width={500}
              height={500}
              className="relative rounded-lg shadow-lg "
            />

            <div class="relative px-4 -mt-16  ">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="flex items-baseline">
                  <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider text-center">
                    HTML/BOOTSRAP &bull; CSS &bull; JS/JQuery
                  </div>
                </div>

                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  Anime Project
                </h4>

                <div class="mt-2">
                  <a href="">
                    <button class="text-purple-700 text-2xl font-semibold p-2">
                      Live
                    </button>
                  </a>
                  <a href="">
                    <button class="text-2xl text-gray-600 p-2">Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="antialiased text-gray-900 p-2">
          <div>
            <Image
              src="/project3.jpg"
              width={500}
              height={500}
              className="relative rounded-lg shadow-lg "
            />

            <div class="relative px-4 -mt-16  ">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="flex items-baseline">
                  <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider text-center">
                    Next js &bull; Tailwind
                  </div>
                </div>

                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  IT Portfolio
                </h4>

                <div class="mt-2">
                  <a href="">
                    <button class="text-purple-700 text-2xl font-semibold p-2">
                      Live
                    </button>
                  </a>
                  <a href="">
                    <button class="text-2xl text-gray-600 p-2">Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>



</div>
       
      </div>
    </section>
  );
}
