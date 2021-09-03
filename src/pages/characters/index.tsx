/**
 * This page displays all the characters
 * which appear in the first six movies.
 *
 * To save memory and make the app lighter,
 * it will only display portion of the names,
 * but more can be fetched by clicking the
 * "fetch more" button.
 */

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import query from '../../graphql/queries';
import { Characters } from '../../components/characters/Characters';
import { Layout } from '../../components/layout/Layout';
import { fetchSwapi } from '../../lib/swapi';
import { ICharacter, ICharacters } from '../../types';

export type PageProps = {
  character: ICharacter[] | (() => ICharacter[]);
  hasNext?: boolean;
};

export default function PageComponent(
  data: InferGetServerSidePropsType<typeof getServerSideProps>,
): JSX.Element {
  if (!data) return (<p>ERROR !  Characters can not be found.</p>);

  return (
    <Layout>
      <Head>
        <title>Star Wars characters</title>
      </Head>
      <h1>Star Wars characters</h1>
      <Characters
        chars={data?.character}
        showButton
        hasNextPage={data?.hasNext}
      />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const chars = await fetchSwapi<ICharacters>(query?.character, { first: 10 });

  return {
    props: {
      character: chars?.allPeople?.people,
      hasNext: chars?.allPeople?.pageInfo?.hasNextPage,
    },
  };
};
