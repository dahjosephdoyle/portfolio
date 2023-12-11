
import NextImage from '@/components/NextImage';
import NextBreadcrumb from '@/components/NextBreadcrumb'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
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
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <NextImage
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src="swimmingpool-screenshot.png"
                alt=""
                width={1080}
                height={1280}
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <Link aria-label="Link Opens in a New Tab" target="_blank" href="https://www.swimmingpool.com" className="group">
                <h1 className="pb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl border-b-4 border-b-white group-hover:border-b-4 group-hover:border-indigo-400 inline-block duration-300 group-hover:text-indigo-600">Swimmingpool.com</h1>
              </Link>

              <p className="mt-6 text-xl leading-8 text-gray-700">
              Explore the world of Swimmingpool.com—a web development project using Jekyll, Bootstrap, and Jenkins. This portfolio piece demonstrates the integration of these technologies for a dynamic static site that connects users with industry professionals through a lead generation platform. Created in 2020, Swimmingpool.com showcases cutting-edge technology and innovative engineering.
              </p>

              <Link aria-label="Link Opens in a New Tab" target="_blank" href="https://www.swimmingpool.com" className="mt-6 inline-block pointer-events-auto rounded-md bg-indigo-600 px-6 py-4 font-semibold leading-5 text-white  mr-4 mb-4 hover:bg-indigo-800 duration-300">View the live site</Link>

              <Link target="_blank" href="/" className="mt-6 inline-block pointer-events-auto rounded-md bg-white px-6 py-4 font-semibold leading-5 text-indigo-600  mr-4 mb-4 border-2 border-indigo-600 hover:bg-indigo-400 duration-300 hover:border-indigo-400 hover:text-white">Contact me</Link>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Jekyll and Bootstrap: The Dynamic Duo:</h2>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                <p>
                  The backbone of Swimmingpool.com lies in its development stack, with Jekyll and Bootstrap taking center stage. Jekyll, a static site generator, lays the groundwork for a fast, secure, and easily maintainable website. Bootstrap, a front-end framework, complements this foundation with its responsive design components, grid system, and utilities. Together, they create a seamless user experience across devices, ensuring both functionality and aesthetic appeal.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Lead Generation Platform: An API-Powered Connection:</h2>
                <p className="mt-8">
                At the heart of Swimmingpool.com's innovation is the lead generation platform, strategically designed to bridge the gap between users and industry professionals. This platform goes beyond conventional lead generation by employing an API to fetch data directly from a SQL database. This API-driven approach ensures real-time, accurate information, enhancing the user experience and facilitating seamless connections between those seeking pool-related services and industry experts.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Jenkins Pipeline: Automating Deployment Excellence:</h2>
                <p className="mt-6">
                Behind the scenes, Swimmingpool.com relies on a robust deployment process managed by the Jenkins pipeline. This CI/CD approach streamlines the release of updates and improvements, maintaining the site's reliability and performance. The Jenkins pipeline acts as the automated backbone, ensuring that changes in the codebase are efficiently integrated and deployed, showcasing the commitment to developer efficiency and project agility.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Casual Blogging and Maintenance Wisdom:</h2>
                <p className="mt-6">
                The site's blog section, while casual in tone, represents a technical achievement in content management. Leveraging Jekyll's templating capabilities, the blog seamlessly integrates lifestyle articles, maintenance advice, and design/product suggestions. The structured content organization allows for easy updates and additions, contributing to a dynamic user experience.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Pool-Building Guide: Technical Insights from Conception to Completion:</h2>
                <p className="mt-6">
                Swimmingpool.com doesn't just provide information—it serves as a comprehensive technical guide for pool construction. The site breaks down the intricate steps involved, from material selection to navigating local regulations. The technical documentation on the construction process aligns with the developer's commitment to clarity and completeness in information dissemination.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Conclusion</h2>

                <p className="mt-6">Swimmingpool.com, developed in 2020, demonstrates my technical skills and innovation through seamless integration of Jekyll, Bootstrap, and Jenkins. The API-driven lead generation system showcases cutting-edge solutions for real-time, accurate information. In my portfolio, Swimmingpool.com reflects my commitment to pushing the boundaries of web development and creating engaging digital experiences.
                </p>

                <Link href="/" className="mt-6 inline-block pointer-events-auto rounded-md bg-indigo-600 px-6 py-4 font-semibold leading-5 text-white  mr-4 mb-4">Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
