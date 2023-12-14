
import NextImage from '@/components/NextImage';
import NextBreadcrumb from '@/components/NextBreadcrumb'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import BackToPortfolioButton from '../../components/BackToPortfolioButton';
import ContactMeButton from '../../components/ContactMeButton';
import Banner from '@/components/Banner'
import Portfolio from '@/components/Portfolio'

export default function HotTubs() {
  let bannerContent = {
    preheading: "Work Showcase",
    heading: "Portfolio",
    description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  };

  const projects = [
    {
        name: "ProflexLiner.com",
        href: "/proflex",
        imageSrc: "/projects/proflexliner-thumbnail.webp",
        imageAlt: "Proflexliner.com project",
        description: "Keep your phone, keys, and wallet together, so you can lose everything at once.",
    },

    {
        name: "Swimmingpool.com",
        href: "/swimmingpool",
        imageSrc: "/projects/swimmingpool-thumbnail.webp",
        imageAlt: "",
        description: "The rest of the house will still be a mess, but your desk will look great.",
    },

    {
        name: "HotTubs.com",
        href: "/hottubs",
        imageSrc: "/projects/hottubs-thumbnail.webp",
        imageAlt: "",
        description: "Be more productive than enterprise project managers with a single piece of paper.",
    },
    {
        name: "NPTpool.com",
        href: "/nptpool",
        imageSrc: "/projects/npt-thumbnail.webp",
        imageAlt: "",
        description: "Be more productive than enterprise project managers with a single piece of paper.",
    },
    {
        name: "Pool360 Portal",
        href: "/pool360",
        imageSrc: "/projects/pool360-thumbnail.webp",
        imageAlt: "",
        description: "Be more productive than enterprise project managers with a single piece of paper.",
    },
    {
        name: "RegalChemicals.com",
        href: "/regalchemicals",
        imageSrc: "/projects/regal-thumbnail.webp",
        imageAlt: "",
        description: "Be more productive than enterprise project managers with a single piece of paper.",
    },
];
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
              className="relative inset-0 h-full w-full bg-gray-50 object-cover"
              src="hottubs-screenshot.png"
              alt=""
              width={1080}
              height={1280}
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
          <Link aria-label="Link Opens in a New Tab" target="_blank" href="https://www.nptpool.com/" className="group">
            <h1 className="pb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl border-b-4 border-b-white group-hover:border-b-4 group-hover:border-indigo-400 inline-block duration-300 group-hover:text-indigo-600">HotTubs.com</h1>
          </Link>

            <p className="mt-6 text-xl leading-8 text-gray-700">
            Hottubs.com is a continually evolving online platform dedicated to hot tubs. By employing Tailwind CSS and Next.js, the goal is to ensure a functional and user-friendly experience, prioritizing ease of use and simplicity across devices.
            </p>

            <Link aria-label="Link Opens in a New Tab" target="_blank" href="https://www.hottubs.com/" className="mt-6 inline-block pointer-events-auto rounded-md bg-indigo-600 px-6 py-4 font-semibold leading-5 text-white  mr-4 mb-4 hover:bg-indigo-800 duration-300">View the live site</Link>

            <ContactMeButton />

            <div className="bg-indigo-500 rounded-lg p-8 mt-8">
              <h2 className="text-2xl font-bold tracking-tight text-white">Work in Progress:</h2>
              <p className="mt-6 text-white">
                It's worth noting that Hottubs.com is a project still in development and has not been released live. The ongoing work aims to refine and enhance the user experience continually.
              </p>
            </div>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">
              Modular Components for Practicality:
            </h2>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
              The website is built with modular components, allowing for easy updates and scalability. Each component serves a purpose, contributing to a flexible and adaptable site structure.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">
                Technological Palette:
              </h2>
              <p className="mt-8">
              The technological backbone includes Next.js for dynamic web development, Tailwind CSS for a clean and modern look, and Azure Deployment Pipeline and Hosting for reliability and regular updates.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Development Workflow:</h2>
              <p className="mt-6">
              The development process is seamlessly integrated into Azure's Deployment Pipeline, emphasizing a practical and efficient workflow. Continuous integration and deployment principles are applied to maintain an updated and reliable website.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">
                Mobile-First &amp; Responsive Design:
              </h2>
              <p className="mt-6">
              Hottubs.com follows a mobile-first approach, ensuring that users have a straightforward experience across devices. The emphasis is on practicality, making it easy for users to navigate and find information.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-400">Conclusion</h2>

              <p className="mt-6">Hottubs.com is a project focused on simplicity and functionality, currently in the works. If you're looking for a web developer who prioritizes practical solutions, I'm here to discuss how we can enhance your online presence.
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
