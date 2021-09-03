/**
 * This is the main page for the app.
 * It displays the name of the movies,
 * the respective intro text and the name
 * of the characters which belongs to the
 * each of the films.
 */

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import query from '../graphql/queries';
import { Film } from '../components/film/Film';
import { Layout } from '../components/layout/Layout';
import { fetchSwapi } from '../lib/swapi';
import { IAllFilms } from '../types';

export type PageProps = {
  filmData: IAllFilms | null;
};

export default function PageComponent(
  data: InferGetServerSidePropsType<typeof getServerSideProps>,
): JSX.Element {
  const films = data?.filmData?.allFilms?.films;

  if (!films) {
    return (<p>ERROR !  Films can not be found.</p>);
  }

  return (
    <Layout>
      <Head>
        <title>Star Wars films</title>
      </Head>
      <h1>Star Wars films</h1>
      { films.map((film, i) => (
        <Film
          key={i}
          film={film}
          chars={film.characterConnection.characters}
        />
      )) }
    </Layout>
  );
}

// Query to get the films.
// Currently, it only retrieves the first six movies.
export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const data = await fetchSwapi<IAllFilms>(query.film, { id: 6 });

  return {
    props: {
      filmData: data,
    },
  };
};
