import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import ScrollIntoView from 'react-scroll-into-view';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const router = useRouter();
  return (
    <Disclosure as='nav' className='bg-white-100'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-1 flex items-center'>
                  <h1
                    style={{
                      WebkitTextStrokeColor: 'var(--color-black)',
                      WebkitTextStrokeWidth: 0.5,
                    }}
                    className='block lg:hidden h-8 w-auto font-display text-4xl text-logoColor-100'
                  >
                    mb<span className='text-black-100'>.</span>
                  </h1>
                  <h1
                    style={{
                      WebkitTextStrokeColor: 'var(--color-black)',
                      WebkitTextStrokeWidth: 0.5,
                    }}
                    className='hidden lg:block h-8 w-auto font-display text-4xl text-logoColor-100'
                  >
                    mb<span className='text-black-100'>.</span>
                  </h1>
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      // eslint-disable-next-line react/jsx-key
                      <ScrollIntoView alignToTop={true} selector={item.href}>
                        <a
                          key={item.name}
                          href={item.href}
                          className={`px-3 py-2 rounded-md text-sm font-serif font-black hover:bg-primary-100 hover:text-white-100 ${
                            router.pathname === `/${item.href}`
                              ? 'bg-primary-100 text-white-100'
                              : ''
                          }`}
                        >
                          {item.name}
                        </a>
                      </ScrollIntoView>
                    ))}
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
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
                  className={`px-3 py-2 block rounded-md text-base font-serif font-black hover:bg-primary-100 hover:text-white-100 ${
                    router.pathname === `/${item.href}`
                      ? 'bg-primary-100 text-white-100'
                      : ''
                  }`}
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
