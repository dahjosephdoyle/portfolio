const navigation = {
    portfolio: [
      { name: 'ProflexLiner.com', href: '/proflexliner' },
      { name: 'Swimmingpool.com', href: '/swimmingpool' },
      { name: 'HotTubs.com', href: '/hottubs' },
    ],
    columnTwo: [
        { name: 'NPTpool.com', href: '/nptpool' },
        { name: 'POOL360 Portal', href: '/pool360' },
        { name: 'RegalChemicals.com', href: '/regalchemicals' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
            <i class="fa-brands fa-facebook"></i>
        ),
      },
      {
        name: 'linkedIn',
        href: '#',
        icon: (props) => (
          <i class="fa-brands fa-linkedin"></i>
        ),
      },
      {
        name: 'GitHub',
        href: '#',
        icon: (props) => (
            <i class="fa-brands fa-github"></i>
        ),
      },
    ],
  }
  
  export default function Footer() {
    return (
      <footer className="bg-slate-900" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
            <i class="fa-regular fa-hand-horns text-4xl text-indigo-500 mr-6"></i>
              <p className="text-sm leading-6 text-gray-300">
                Making the world a better place through constructing elegant hierarchies.
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400 text-2xl">
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Portfolio</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.portfolio.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <ul role="list" className="mt-12 space-y-4">
                    {navigation.columnTwo.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          </div>
        </div>
      </footer>
    )
  }
  