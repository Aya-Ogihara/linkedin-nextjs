import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './Navigation.module.css';
import { useRouter } from 'next/router';

export const Navigation = () => {
  const menuItems = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Contacts',
      path: '/contacts',
    },
    {
      title: 'News',
      path: '/news',
    },
    {
      title: 'Top Stories',
      path: '/news/top-stories',
    },
    {
      title: 'Popular News',
      path: '/news/popular',
    },
    {
      title: 'Sections',
      path: '/sections',
    },
  ];
  const router = useRouter();

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
          {menuItems.map((item) => {
            const styleName =
              item.path === router.asPath
                ? style.activeMenuItem
                : style.menuItem;
            return (
              <li key={item.path} className={styleName}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
