'use client';

import { Dialog } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import CloseIcon from 'components/icons/close';
import MenuIcon from 'components/icons/menu';
import { Menu } from 'lib/shopify/types';
import Search from './search';

export default function Toolbar({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobileMenuIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuIsOpen]);

  useEffect(() => {
    setMobileMenuIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      {menu.length ? (
        <ul className="hidden justify-around p-3 md:flex">
          {menu.map((item: Menu) => (
            <li key={item.title} className="text-sm font-semibold">
              <Link
                href={item.path}
                className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
              >
                {item.title}
              </Link>
              {/* ? (
                <div>
                  <p>Test</p>
                </div>
              ) : null} */}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
