import Link from 'next/link'

export default function ContactMeButton() {
    return (
        <Link href="/#contactForm" className="mt-6 inline-block pointer-events-auto rounded-md bg-white px-6 py-4 font-semibold leading-5 text-indigo-600  mr-4 mb-4 border-2 border-indigo-600 hover:bg-indigo-400 hover:border-indigo-400 duration-300 hover:text-white">Contact me</Link>
    );
};