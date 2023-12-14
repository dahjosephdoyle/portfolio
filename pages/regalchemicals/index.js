
import NextImage from '@/components/NextImage';
import NextBreadcrumb from '@/components/NextBreadcrumb'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
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
                src="regalchemicals-screenshot.png"
                alt=""
                width={1080}
                height={1280}
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <Link aria-label="Link Opens in a New Tab" target="_blank" href="https://www.regalchemicals.com/" className="group">
                <h1 className="pb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl border-b-4 border-b-white group-hover:border-b-4 group-hover:border-indigo-400 inline-block duration-300 group-hover:text-indigo-600">Regal Chemicals</h1>
              </Link>

              <p className="mt-6 text-xl leading-8 text-gray-700">
              Regal Chemicals' website is a testament to simplicity and functionality. Crafted with a mobile-first approach, the site ensures a seamless user experience across various devices. Hosted and deployed by Microsoft Azure, the platform provides a reliable and secure space for users to explore and learn more about Regal's premium pool chemicals.
              </p>

              <Link aria-label="Link Opens in a New Tab" target="_blank" href="https://www.regalchemicals.com/" className="mt-6 inline-block pointer-events-auto rounded-md bg-indigo-600 px-6 py-4 font-semibold leading-5 text-white  mr-4 mb-4 hover:bg-indigo-800 duration-300">View the live site</Link>

              <ContactMeButton />

              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Technological Foundation:</h2>
                <p>
                Built on the robust combination of Next.js and Tailwind CSS, Regal Chemicals' website embraces modern web development practices. This ensures a clean and intuitive design, allowing users to effortlessly navigate and access the information they need. Microsoft Azure's hosting and deployment capabilities contribute to the site's overall efficiency.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Development Philosophy:</h2>
                <p>
                The website's design is centered around a modular component structure, making updates and enhancements straightforward. This approach not only ensures ease of maintenance but also sets the stage for future scalability, adapting to the evolving needs of Regal Chemicals.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Customer-Focused Experience:</h2>
                <p>
                Regal Chemicals' website is tailored to prioritize the needs of customers. Whether users are seeking information about pool chemicals, exploring product details, or simply navigating through the site, the emphasis is on delivering a user-friendly experience that aligns with the brand's commitment to excellence.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Conclusion</h2>
                <p>
                Regal Chemicals' website stands as a digital gateway to quality and innovation in pool chemicals. If you're looking for a website that mirrors your brand's values and simplifies user interaction, I'm here to discuss how we can further elevate your online presence.
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
