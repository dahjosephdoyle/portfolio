
import NextImage from '@/components/NextImage';
import NextBreadcrumb from '@/components/NextBreadcrumb';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import BackToPortfolioButton from '../../components/BackToPortfolioButton';
import ContactMeButton from '@/components/ContactMeButton';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

export default function Swimmingpool() {

  const seo = {
    title: "POOL360.com Project | Joe Doyle's Web Development Portfolio",
    description: "Explore Joe Doyle's web development work with the POOL360 project. Discover practical design, smooth functionality, and user-friendly solutions. Visit JoeDoyleRules.com for a closer look at the project.",
  }
  
  return (
    <>
      <NextSeo title={seo.title} description={seo.description}/>
      <NextBreadcrumb
          homeElement={'Home'}
          separator={<span className="text-indigo-200"> | </span>}
          capitalizeLinks
        />

      <div className="relative bg-white">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="col-span-1 bg-slate-100 lg:order-1 order-2">
            <div className="relative lg:h-auto lg:w-full">
              <NextImage
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src="pool360-screenshot.png"
                alt=""
                width={1080}
                height={1280}
              />
            </div>
          </div>
          <div className="px-6 col-span-1 lg:order-2 order-1">
            <div className="max-w-2xl px-12 py-24 lg:mx-0 mx-auto">
              <Link aria-label="Link Opens in a New Tab" target="_blank" href="https://portal.POOL360.com/" className="group">
                <h1 className="pb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl border-b-4 border-b-white group-hover:border-b-4 group-hover:border-indigo-400 inline-block duration-300 group-hover:text-indigo-600">POOL360 Portal</h1>
              </Link>

              <p className="mt-6 text-xl leading-8 text-gray-700">
              POOL360 Portal stands as a hub for customers seeking control over their marketing campaigns. By leveraging Next.js, Tailwind CSS, and the efficiency of Azure Deployment Pipeline, the portal offers customers the ability to manage ad campaigns seamlessly. Additionally, customers can enroll for listings on prominent customer locators, spanning across swimmingpool.com, nptpool.com, hottubs.com, and more. The portal also empowers users to edit their location information for increased accuracy.
              </p>

              <Link aria-label="Link Opens in a New Tab" target="_blank" href="https://portal.POOL360.com/" className="mt-6 inline-block pointer-events-auto rounded-md bg-indigo-600 px-6 py-4 font-semibold leading-5 text-white  mr-4 mb-4 hover:bg-indigo-800 duration-300">View the live site</Link>

              <ContactMeButton />

              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Technological Foundation:</h2>
                <p>
                The technological backbone of POOL360 Portal includes Next.js for dynamic web development, Tailwind CSS for a clean and intuitive design, Azure Deployment Pipeline for a streamlined deployment process, and Contentful CMS for efficient content management.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Development Workflow:</h2>
                <p>
                The development process is seamlessly integrated into Azure&apos;s Deployment Pipeline, emphasizing an efficient workflow. This ensures that the portal remains up-to-date and reliable for customers managing their marketing endeavors.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Customer-Centric Features:</h2>
                <p>
                POOL360 Portal focuses on empowering customers with the tools they need. Whether it&apos;s managing marketing ad campaigns, enrolling for listings on diverse customer locators, or updating location information, the portal is designed for practicality and user-friendly interactions.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Conclusion</h2>
                <p>
                The POOL360 Portal is an ongoing project dedicated to enhancing the customer experience. If you&apos;re seeking a platform that puts you in control of your marketing strategies, I&apos;m here to discuss how we can continue to refine and elevate your online presence.
                </p>

                <BackToPortfolioButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
