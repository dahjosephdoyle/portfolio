import NextImage from "./NextImage";

export default function Portfolio({projects}) {

    return (
        <section
            id="portfolio"
            aria-labelledby="project-heading"
            className="mx-auto max-w-3xl px-4 pt-12 pb-24 sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <div className="mt-10 grid lg:grid-cols-3 grid-cols-2 gap-x-8 space-y-0">
            {projects.map((project, key) => (
                <a key={project.name} href={project.href} className="group pb-8 lg:text-left text-center flex flex-col lg:items-start items-center col-span-1">
                <div
                    aria-hidden="true"
                    className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                >
                    <NextImage
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover object-center block mx-auto"
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