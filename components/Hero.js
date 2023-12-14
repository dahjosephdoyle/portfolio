import NextImage from '@/components/NextImage';

export default function Hero({linkdIn, headingIcon, heading, ellipsis, description, skills, imageName, imageAlt}) {
    return (
      <div className="relative bg-white">
        <div className="mx-auto grid grid-cols-12 lg:gap-x-8 container">
          <div className="px-12 pb-24 pt-10 lg:col-span-6 col-span-12 flex items-center">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="flex lg:mt-12">
                {/* linkdIn */}
                {linkdIn && 
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Feel free to check out my{' '}
                  <a target="_blank" aria-label="Link opens in a new tab" href="https://www.linkedin.com/in/joseph-doyle-09463b75/" className="whitespace-nowrap font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    LinkdIn <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
                }
              </div>
              {/* Heading  */}
              <h1 className="lg:mt-24 mt-12 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                {/* Heading Icon */}
                {headingIcon &&
                  <i className="fa-regular fa-hand-love text-6xl text-indigo-500 mr-6"></i>
                }
               {heading}
               {/* Ellipses */}
               {ellipsis && 
                <span className="text-indigo-700"> ...</span>
               }
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                {description}
              </p>
              <div className="mt-16 flex items-center justify-space-around flex-wrap">
                {skills.map((skill, key) => (
                  <span className="pointer-events-auto rounded-md bg-indigo-600 px-6 py-4 font-semibold leading-5 text-white  mr-4 mb-4">{skill}</span>
                ))}
                <span className="text-indigo-500 font-semibold px-6 py-4 leading-5  inline-block border-2 border-indigo-700 rounded-md mb-4">and more!</span>
              </div>
             
            </div>
          </div>
          <div className="relative aspect-square lg:col-span-6 h-screen overflow-hidden col-span-12">
            <NextImage
              className="w-full object-cover bg-gray-100"
              src={imageName}
              alt={imageAlt}
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    )
  }
  