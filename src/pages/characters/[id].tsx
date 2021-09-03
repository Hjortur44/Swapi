/**
 * This page displays infomation about a choicen character.
 */

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import query from '../../graphql/queries';
import { ErrorPage } from '../../containers/Error';
import { fetchSwapi } from '../../lib/swapi';
import { IPerson } from '../../types';

import { Layout } from '../../components/layout/Layout';
import { Person } from '../../components/person/Person';

export type PageProps = {
  person: IPerson | null;
};

export default function PageComponent(
  data: InferGetServerSidePropsType<typeof getServerSideProps>,
): JSX.Element {
  const { person } = data;

  if (!person) {
    return <ErrorPage message="Person not found" status={404} />;
  }

  return (
    <Layout>
      <Head>
        <title>Star Wars character—{ person?.person?.name }</title>
      </Head>
      <Person person={person} />
    </Layout>
  );
}

// Server-side fetching
export const getServerSideProps: GetServerSideProps<PageProps> = async ({ params }) => {
  const id = params?.id as string | undefined;
  let result = null;

  if (id) {
    result = await fetchSwapi<IPerson>(query.person, { id });
  }

  return {
    props: {
      person: result,
    },
  };
};
