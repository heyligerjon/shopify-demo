import Link from 'next/link';
import { Suspense } from 'react';

import Cart from 'components/cart';
import CartIcon from 'components/icons/cart';
import LogoIcon from 'components/icons/logo';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import MobileMenu from './mobile-menu';
import Toolbar from './toolbar';
import Search from './search';

export default async function Navbar() {
  const menu = await getMenu('main-menu');
  const toolbar = await getMenu('main-menu');

  return (
    <>
      <nav className="relative flex items-center justify-between bg-white p-4 dark:bg-black lg:px-6">
        <div className="block w-1/3 md:hidden">
          <MobileMenu menu={menu} />
        </div>
        <div className="flex justify-self-center md:w-1/3 md:justify-self-start">
          <div className="md:mr-4">
            <Link href="/" aria-label="Go back home">
              <LogoIcon className="h-8 transition-transform hover:scale-110" />
            </Link>
          </div>
        </div>
        <div className="hidden w-1/3 md:block">
          <Search />
        </div>

        <div className="flex w-1/3 justify-end">
          <Suspense fallback={<CartIcon className="h-6" />}>
            {/* @ts-expect-error Server Component */}
            <Cart />
          </Suspense>
        </div>
      </nav>
      <Toolbar menu={toolbar} />
    </>
  );
}
