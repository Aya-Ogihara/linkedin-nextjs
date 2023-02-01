import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/contacts'>Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
