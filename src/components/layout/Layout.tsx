/**
 * Layout for all the pages.
 */

import Link from 'next/link';
import style from './Layout.module.scss';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props): JSX.Element {
  return (
    <div className={style.layout}>
      <div className={style.layout__header}>
        <Link href="/">Films</Link>
        <Link href="/characters">Characters</Link>
      </div>
      <main className={style.layout__main}>{children}</main>
    </div>
  );
}
