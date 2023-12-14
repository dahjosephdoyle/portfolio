
import NextImage from '@/components/NextImage';
import NextBreadcrumb from '@/components/NextBreadcrumb'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import BackHomeButton from '../../components/BackHomeButton';
import ContactMeButton from '@/components/ContactMeButton';
import Link from 'next/link'
export default function Swimmingpool() {
  return (
    <>
      <NextBreadcrumb
          homeElement={'Home'}
          separator={<span className="text-indigo-200"> | </span>}
          capitalizeLinks
        />

      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl flex lg:flex-row flex-col-reverse lg:justify-between lg:px-8 xl:justify-end">
          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <NextImage
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src="nptpool-screenshot.png"
                alt=""
                width={1080}
                height={1280}
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <Link aria-label="Link Opens in a New Tab" target="_blank" href="https://www.nptpool.com/" className="group">
                <h1 className="pb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl border-b-4 border-b-white group-hover:border-b-4 group-hover:border-indigo-400 inline-block duration-300 group-hover:text-indigo-600">NPTpool.com</h1>
              </Link>

              <p className="mt-6 text-xl leading-8 text-gray-700">
              Discover NPTpool.com, POOLCORP's exclusive 2020 creation, blending Jekyll, Bootstrap, and Jenkins for a visually stunning and advanced platform. NPT offers a diverse range of pool materials, from tiles to fire features, making the dream backyard a reality through innovative technology.
              </p>

              <Link aria-label="Link Opens in a New Tab" target="_blank" href="https://www.nptpool.com/" className="mt-6 inline-block pointer-events-auto rounded-md bg-indigo-600 px-6 py-4 font-semibold leading-5 text-white  mr-4 mb-4 hover:bg-indigo-800 duration-300">View the live site</Link>

              <ContactMeButton />

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Jekyll and Bootstrap: A Synergetic Pair in Transforming Backyard Experiences</h2>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                <p>
                  NPTpool.com leverages the powerful combination of Jekyll and Bootstrap, forming the core of its development stack. Jekyll, as a static site generator, ensures the site's efficiency, security, and easy maintenance. Bootstrap, a front-end framework, contributes responsive design elements, a grid system, and utilities, creating an immersive user experience that seamlessly adapts to various devices.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Lead Generation and Showroom Locator:</h2>
                <p className="mt-8">
                NPTpool.com's design centers around the user, incorporating a lead generation platform with a distinctive approach. The website includes a showroom finder, directing users to NPT showrooms where they can leisurely explore products in a stress-free setting. The focus here is on providing an experiential journey rather than merely facilitating transactions, creating a cozy space for users to imagine their ideal outdoor space. The utilization of Bootstrap guarantees an aesthetically pleasing and easily navigable showroom locator.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Contractor Locator: Harnessing the Power of Solr and Javascript:</h2>
                <p className="mt-6">
                Beyond showrooms, NPTpool.com offers a sophisticated contractor locator, powered by Javascript and a Lucene index called Solr. This dynamic locator pulls real-time information, allowing users to find certified NPT contractors seamlessly. The use of Solr enhances the search functionality, delivering accurate and instant results, reinforcing NPT's commitment to excellence in user experience.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Conclusion:</h2>
                <p className="mt-6">
                NPTpool.com stands as a testament to the synergy of technology and design, shaping the future of backyard innovation. With Jekyll, Bootstrap, and Jenkins orchestrating its development, this site not only presents a comprehensive private label product line but also introduces innovative locators that enhance user experience. The unique showroom and contractor locators, coupled with the power of Solr and Javascript, showcase a commitment to providing users with not just products, but an entire backyard lifestyle. In my portfolio, NPTpool.com remains a proud exemplar of my dedication to crafting digital experiences that transcend expectations and redefine the landscape of web development.
                </p>

                <BackHomeButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
