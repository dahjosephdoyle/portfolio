import Link from 'next/link';

export default function BackHomeButton() {
    return(
        <Link href="/" className="mt-6 inline-block pointer-events-auto rounded-md bg-indigo-600 px-6 py-4 font-semibold leading-5 text-white  mr-4 mb-4">Back to Home</Link>
    );
}