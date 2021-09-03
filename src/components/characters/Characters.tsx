/**
 * Displays a list of characters,
 * it can fetch more if needed.
 */

import React, { useState } from 'react';
import Link from 'next/link';

import s from './Characters.module.scss';
import { Button } from '../button/Button';
import { ICharacter } from '../../types';

type Props = {
  chars: ICharacter[] | (() => ICharacter[]);
  hasNextPage?: boolean;
  showButton?: boolean;
};

export function Characters(
  {
    chars,
    showButton = true,
    hasNextPage = false,
  }: Props,
): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [characters, setcharacters] = useState<ICharacter[]>(chars);

  const [isNextPage, setIsNextPage] = useState<boolean>(hasNextPage);
  const [counter, setCounter] = useState<number>(20);

  const fetchMore = async (): Promise<void> => {
    setLoading(true);
    setCounter(counter + 10);

    const data = await fetch('/api/characters',
      { method: 'POST', body: `${counter}` });

    const result = JSON.parse(await data?.text());
    setcharacters(result?.page);
    setIsNextPage(result?.next || loading);
    setLoading(false);
  };

  return (
    <section className={s.container}>
      <ul className={s.container__list}>
        {characters?.map((char, i) => (
          <li key={i}>
            <Link href={`/characters/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>
      {loading && (<p> Sæki gögn... </p>)}
      {showButton
        && (
          <Button
            disabled={loading || !isNextPage}
            onClick={fetchMore}
          >
            Fetch more
          </Button>
        )}
    </section>
  );
}
