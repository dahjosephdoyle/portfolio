import Image from 'next/image'
import Hero from '@/components/Hero'
import Banner from '@/components/Banner'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import emailjs from '@emailjs/browser';

export default function Home() {

  const heroContent = {
    linkdIn: true,
    headingIcon: "fa-regular fa-hand-love",
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
