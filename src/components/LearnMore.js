import { ChevronRightIcon } from '@heroicons/react/solid'

export default function LearnMore({name, link}){
    return(
        <div className="mt-8 grid justify-items-center sm:justify-items-start">                
        <a
          href={`/${link}`}
          className="inline-flex items-center text-black bg-red-100 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-red-600"
        >
          <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-red-600 rounded-full">
            {name}
          </span>
          <span className="ml-4 text-sm">Learn More</span>
          <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
        </a>
      </div>
    )
}