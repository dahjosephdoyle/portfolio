import NextImage from '@/components/NextImage';

export default function Hero() {
    return (
      <div className="relative bg-white">
        <div className="mx-auto grid grid-cols-12 lg:gap-x-8 container">
          <div className="px-12 pb-24 pt-10 lg:col-span-6 col-span-12 flex items-center">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="hidden sm:mt- sm:flex lg:mt-12">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Feel free to check out my{' '}
                  <a href="#" className="whitespace-nowrap font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    LinkdIn <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              <i className="fa-regular fa-hand-love text-6xl text-indigo-500 mr-6"></i> Hey, I'm Joe <span className="text-indigo-700">...</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                a <span className="text-indigo-300">not so average</span> web developer and designer with proficiency in web languages and frameworks. I'm committed to practical solutions that meet industry standards and value collaboration. Please, explore my portfolio below for project insights.
              </p>
              <div className="mt-16 flex items-center justify-space-around flex-wrap">
                <span className="pointer-events-auto rounded-md bg-indigo-600 px-6 py-4 font-semibold leading-5 text-white  mr-4 mb-4">HTML 5</span>
                <span className="pointer-events-auto rounded-md bg-indigo-600 px-6 py-4 font-semibold leading-5 text-white  mr-4 mb-4">CSS 3</span>
                <span className="pointer-events-auto rounded-md bg-indigo-600 px-6 py-4 font-semibold leading-5 text-white  mr-4 mb-4">JavaScript</span>
                <span className="pointer-events-auto rounded-md bg-indigo-600 px-6 py-4 font-semibold leading-5 text-white  mr-4 mb-4">React.JS</span>
                <span className="pointer-events-auto rounded-md bg-indigo-600 px-6 py-4 font-semibold leading-5 text-white  mr-4 mb-4">Tailwind</span>
                <span className="pointer-events-auto rounded-md bg-indigo-600 px-6 py-4 font-semibold leading-5 text-white  mr-4 mb-4">Contentful CMS</span>
                <span className="text-indigo-500 font-semibold px-6 py-4 leading-5  inline-block border-2 border-indigo-700 rounded-md mb-4">and more!</span>
              </div>
             
            </div>
          </div>
          <div className="relative aspect-square lg:col-span-6 h-screen overflow-hidden col-span-12">
            <NextImage
              className="w-full object-cover bg-gray-100"
              src='family-photo.webp'
              alt="Joe's beautiful family"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    )
  }
  