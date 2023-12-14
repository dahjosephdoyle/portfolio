import Image from 'next/image'
import Hero from '@/components/Hero'
import Banner from '@/components/Banner'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import emailjs from '@emailjs/browser';

export default function Home() {

  const heroContent = {
    linkdIn: true,
    headingIcon: "fa-regular fa-hand-horns",
    heading: "Hey, I'm Joe",
    ellipsis: true,
    description: "a not so average web developer and designer with proficiency in web languages and frameworks. I'm committed to practical solutions that meet industry standards and value collaboration. Please, explore my portfolio below for project insights.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Contentful CMS"],
    imageName: "family-photo.webp",
    imageAlt: "Joe's beautiful family",
  };

  let bannerContent = {
    preheading: "Work Showcase",
    heading: "Portfolio",
    description: "Introducing a diverse portfolio of websites, showcasing a spectrum of innovative digital experiences crafted to meet diverse needs and preferences.",
  };

  const projects = [
    {
        name: "ProflexLiner.com",
        href: "/proflexliner",
        imageSrc: "/projects/proflexliner-thumbnail.webp",
        imageAlt: "Proflexliner.com project",
        description: "A single-page, multilingual website created using Next.js and Tailwind CSS",
    },

    {
        name: "Swimmingpool.com",
        href: "/swimmingpool",
        imageSrc: "/projects/swimmingpool-thumbnail.webp",
        imageAlt: "Swimmingpool.com project",
        description: "The Ultimate Pool Resource created with Jekyll SSG and Bootstrap",
    },

    {
        name: "HotTubs.com",
        href: "/hottubs",
        imageSrc: "/projects/hottubs-thumbnail.webp",
        imageAlt: "HotTubs.com project",
        description: "An in-progress site taking full advantage of Next.js's components structure.",
    },
    {
        name: "NPTpool.com",
        href: "/nptpool",
        imageSrc: "/projects/npt-thumbnail.webp",
        imageAlt: "NPTpool.com project",
        description: "A luxury products focused website built with Jekyll SSG and Bootstrap",
    },
    {
        name: "POOL360 Portal",
        href: "/pool360",
        imageSrc: "/projects/POOL360-thumbnail.webp",
        imageAlt: "POOL360 Portal project",
        description: "Customer portal project built using Next.js, Contentful CMS, and Tailwind CSS",
    },
    {
        name: "RegalChemicals.com",
        href: "/regalchemicals",
        imageSrc: "/projects/regal-thumbnail.webp",
        imageAlt: "RegalChemicals.com project",
        description: "A simple and straightforward informational website created with Next.js and Tailwind CSS",
    },
];

const contactForm = {
  name: true,
  phone: true,
  email: true,
  message: true,

}

  return (
    <main>
      <Hero
        linkdIn={heroContent.linkdIn}
        headingIcon={heroContent.headingIcon}
        heading={heroContent.heading}
        description={heroContent.description}
        ellipsis={heroContent.ellipsis}
        skills={heroContent.skills}
        imageName={heroContent.imageName}
        imageAlt={heroContent.imageAlt}
      />
      <Banner 
        preheading={bannerContent.preheading} 
        heading={bannerContent.heading} 
        description={bannerContent.description}
      />
      <Portfolio 
        projects={projects}
      />
      <Contact 
        name={contactForm.name}
        phone={contactForm.phone}
        email={contactForm.email}
        message={contactForm.message}
      />
    </main>
  )
}
