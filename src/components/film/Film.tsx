/**
 * Displays infomation about a film and its characters.
 */

import { ICharacter, IFilm } from '../../types';
import { Characters } from '../characters/Characters';
import s from './Film.module.scss';

type Props = {
  film: IFilm | null;
  chars: ICharacter[] | (() => ICharacter[]);
};

export function Film({ film, chars }: Props): JSX.Element {
  const openings = (film?.openingCrawl)?.split('\r\n\r\n');
  const paragraphs: Array<Array<string>> = [];

  openings?.forEach((o) => { paragraphs.push(o?.split('\r\n')); });

  return (
    <section className={s.film}>
      <h2 className={s.film__title}>
        Episode { film?.episodeID }: { film?.title }
      </h2>
      <section className={s.film__main}>
        <section className={s.film__opening}>
          { paragraphs?.map((paragraph, i) => (
            <section key={i}>
              { paragraph?.map((line, j) => (
                <p key={j}>
                  { line }
                </p>
              )) }
            </section>
          )) }
        </section>
        <section className={s.film__link_container}>
          <h2>Characters</h2>
          <Characters chars={chars} showButton={false} />
        </section>
      </section>
    </section>
  );
}
