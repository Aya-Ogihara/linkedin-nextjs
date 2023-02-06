import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { menuItems } from '@/utils/menu-items';

export const Navigation = () => {
  return (
    <header className='header'>
      <div>
        <Link href='/'>
          <Image
            src='/next.svg'
            alt='Next.js Logo'
            width={180}
            height={37}
            priority
          />
        </Link>
      </div>
      <nav className='main-nav'>
        <ul>
          {menuItems.map((item) => (
            <li key={item.slug}>
              <Link href={item.slug}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
