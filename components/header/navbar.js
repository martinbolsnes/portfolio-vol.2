import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navigation() {
  return (
    <Disclosure as='nav' className='bg-white-100 w-full'>
      {({ open }) => (
        <>
          <div className='max-w-7xl px-7 sm:px-4 sm:mx-0 md:mx-0 md:px-12 lg:mx-10 lg:px-4'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-center'>
                <div className='flex-1 flex items-center'>
                  <h1 className='block lg:hidden h-8 w-auto font-display text-4xl text-logoColor-100 text-stroke-1 text-stroke-black-100'>
                    mb<span className='text-black-100'>.</span>
                  </h1>
                  <h1 className='hidden lg:block h-8 w-auto font-display text-4xl text-logoColor-100 text-stroke-1 text-stroke-black-100'>
                    mb<span className='text-black-100'>.</span>
                  </h1>
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-primary-100 text-white-100'
                            : 'text-black-100 hover:bg-tertiary-100 hover:text-white-100',
                          'px-3 py-2 rounded-md text-sm font-serif font-black'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-black-100 hover:text-white-100 hover:bg-tertiary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-tertiary-100'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-primary-100 text-white-100'
                      : 'text-black-100 hover:bg-tertiary-100 hover:text-white-100',
                    'block px-3 py-2 rounded-md text-base font-black'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
