import NextImage from '@/components/NextImage';

export default function Hero({linkdIn, headingIcon, heading, ellipsis, description, skills, imageName, imageAlt, cta}) {
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
              <h1>
                {/* Heading Icon */}
                {headingIcon &&
                  <i className={`${headingIcon} text-6xl text-indigo-500 mr-6`}></i>
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
              {/* Skills References */}
              <div className="mt-16 lg:flex lg:items-center lg:justify-space-around lg:flex-wrap grid grid-cols-2">
                {skills.map((skill, key) => (
                  (skill.link &&
                  <a target="_blank" aria-label="Link opens in a new tab" href={skill.link} key={skill.name} className="pointer-events-auto rounded-md bg-indigo-600 px-6 py-4 font-semibold leading-5 text-white lg:mt-0 lg:ml-0 lg:mr-4 mb-4 hover:bg-indigo-800 ease-in-out duration-300 lg:w-auto m-1 text-center col-span-1 flex items-center justify-center">{skill.name}</a>
                  )
                ))}
                <span className="bg-slate-100 text-slate-500 font-semibold px-6 py-4 leading-5  inline-block border-2 border-slate-300 rounded-md mb-4 text-center col-span-2">and more!</span>
              </div>
              {cta &&
                <a href={cta.link} className="block text-indigo-500 font-semibold px-6 py-4 leading-5 border-2 border-indigo-700 rounded-md mb-4 text-center mt-6 hover:bg-indigo-600 hover:text-white duration-300 ease-in-out">{cta.text}</a>
              }
            </div>
          </div>
          <div className="relative lg:aspect-square md:aspect-[3/4] aspect-square lg:col-span-6 overflow-hidden col-span-12 rounded-xl my-12 mx-auto">
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
  