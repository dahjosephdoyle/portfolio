import NextImage from "./NextImage";

export default function Portfolio() {

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
            href: "/regal-chemicals",
            imageSrc: "/projects/regal-thumbnail.webp",
            imageAlt: "",
            description: "Be more productive than enterprise project managers with a single piece of paper.",
        },
    ];

    return (
        <section
            aria-labelledby="project-heading"
            className="mx-auto max-w-xl px-4 pt-12 pb-24 sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {projects.map((project) => (
                <a key={project.name} href={project.href} className="group block pb-8">
                <div
                    aria-hidden="true"
                    className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                >
                    <NextImage
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{project.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{project.description}</p>
                </a>
            ))}
            </div>
        </section>
    )
}