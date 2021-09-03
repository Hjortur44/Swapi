/**
 * This page displays the infomation about
 * the person whom played in any of the films.
 */

import Link from 'next/link';

import s from './Person.module.scss';
import { IPerson } from '../../types';

type Props = {
  person: IPerson | null;
};

export function Person({ person }: Props): JSX.Element {
  return (
    <div className={s.container}>
      <ul>
        <li><span>Name:</span> { person?.person?.name }</li>
        <li><span>Birth year:</span> { person?.person?.birthYear }</li>
        <li><span>Eye color:</span> { person?.person?.eyeColor }</li>
        <li><span>Hair color:</span> { person?.person?.hairColor }</li>
        <li><span>Height:</span> { person?.person?.height }</li>
        <li><span>Mass:</span> { person?.person?.mass }</li>
      </ul>
      <Link href="/characters">Back to characters</Link>
    </div>
  );
}
