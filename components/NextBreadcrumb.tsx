'use client'

import React, { ReactNode } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

type TBreadCrumbProps = {
    homeElement: ReactNode,
    separator: ReactNode,
    containerClasses?: string,
    listClasses?: string,
    activeClasses?: string,
    capitalizeLinks?: boolean
}

const NextBreadcrumb = ({homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks}: TBreadCrumbProps) => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path )

    return (
        <div>
            <ul className="flex items-center justify-center bg-gradient-to-r from-indigo-600 to-indigo-400 py-4">
                <li><Link href={'/'} className="text-indigo-200 px-4">{homeElement}</Link></li>
                {pathNames.length > 0 && separator}
            {
                pathNames.map( (link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    let itemClasses = paths === href ? `text-indigo-200 px-4` : "text-white px-4"
                    let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                    return (
                        <div key={index}>
                            <li>
                                <Link className="px-4 text-white font-semibold" href={href}>{itemLink}.com</Link>
                            </li>
                            {pathNames.length !== index + 1 && separator}
                        </div>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default NextBreadcrumb