
import NextImage from '@/components/NextImage';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import NextBreadcrumb from '@/components/NextBreadcrumb'

export default function ProflexLiner() {
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
                src="proflex-screenshot.png"
                alt=""
                width={1080}
                height={1280}
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <Link target="_blank" aria-label="Link Opens in a New Tab" href="https://proflexliner.com/" className="group">
              <h1 className="pb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl border-b-4 border-b-white group-hover:border-b-4 group-hover:border-indigo-400 inline-block duration-300 group-hover:text-indigo-600">Proflexliner.com</h1>
            </Link>

              <p className="mt-6 text-xl leading-8 text-gray-700">
              Among my notable projects, Proflex Liner stands out as a testament to meticulous craftsmanship. This one-page website, developed over a one month period, not only serves as an informative platform for the distinguished European luxury vinyl brand but also strategically incorporates a lead generation form at its core. Built using the Next.js framework and leveraging the efficiency of Tailwind CSS, Proflex Liner exemplifies the seamless integration of style and functionality.
              </p>

              <Link target="_blank" aria-label="Link Opens in a New Tab" href="https://proflexliner.com/" className="mt-6 inline-block pointer-events-auto rounded-md bg-indigo-600 px-6 py-4 font-semibold leading-5 text-white  mr-4 mb-4 hover:bg-indigo-800 duration-300">View the live site</Link>

              <Link target="_blank" href="/" className="mt-6 inline-block pointer-events-auto rounded-md bg-white px-6 py-4 font-semibold leading-5 text-indigo-600  mr-4 mb-4 border-2 border-indigo-600 hover:bg-indigo-400 duration-300 hover:border-indigo-400 hover:text-white">Contact me</Link>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">The Challenge:</h2>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                <p>
                  The task at hand in crafting Proflex Liner was multifaceted - to encapsulate the sophistication of an exclusive European vinyl brand within a one-page website. The challenge included not only informing visitors about the brand but also seamlessly integrating a lead generation form at the bottom. This dual objective demanded an efficient framework and an intuitive design to ensure a flawless user experience.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Next.js: Elevating User Experience:</h2>
                <p className="mt-8">
                We strategically chose Next.js for Proflex Liner, leveraging its powerful client-side rendering capabilities. This decision optimizes the website's performance, ensuring efficient rendering on the client side for seamless navigation and an enhanced user experience, aligning perfectly with Proflex Liner's commitment to advanced technology and user-friendly design.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">No server? Tailwind CSS: Stylish Simplicity:</h2>
                <p className="mt-6">
                  Tailwind CSS played an instrumental role in shaping the aesthetic appeal of Proflex Liner. This utility-first CSS framework enabled the creation of a visually stunning and consistent design across the entire website. Its modular approach to styling provided the flexibility needed to maintain a cohesive look, ensuring a visually captivating interface aligned with Proflex Liner's commitment to luxury.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Multilingual Magic:</h2>
                <p className="mt-6">
                ProflexLiner's European presence necessitated meticulous multilingual integration. Effortlessly transitioning between eight languages, the website offers a tailored experience for a diverse European audience. Each language adaptation is carefully curated, maintaining a unified design that reflects the brand's commitment to European excellence.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Lead Generation and User Engagement:</h2>
                <p className="mt-6">
                Beyond its informative role, ProflexLiner strategically integrates a lead generation form at the bottom of the page. This ensures that visitors, captivated by the brand's story, can seamlessly express their interest and become part of the ProflexLiner community. The website's one-page design enhances user engagement, making the lead generation process intuitive and accessible.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Conclusion</h2>

                <p className="mt-6">ProflexLiner stands as a paragon of the fusion of cutting-edge technology and thoughtful design in the realm of professional web development. This one-page masterpiece, crafted with Next.js and Tailwind CSS, not only reflects the essence of a European luxury vinyl brand but also seamlessly integrates lead generation for an enriched user experience. As you explore my portfolio, immerse yourself in the luxurious journey of ProflexLiner and discover the harmonious blend of style and functionality that defines this exemplary web development project.

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
