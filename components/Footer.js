const navigation = {
    portfolio: [
      { name: 'Marketing', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Commerce', href: '#' },
      { name: 'Insights', href: '#' },
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
            <i className="fa-regular fa-hand-love text-4xl text-indigo-500 mr-6"></i>
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
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-400">Website created in 2023 with sweat and elbow grease.</p>
          </div>
        </div>
      </footer>
    )
  }
  