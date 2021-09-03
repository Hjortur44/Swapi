/**
 * Run a GraphQL query against the SWAPI GraphQL API
 * @param query GraphQL query to run against SWAPI GraphQL
 * @param variables Variables for query
 * @returns Result as given generic type T
 */

export async function fetchSwapi<T>(
  query: string,
  variables: Record<string, string | number> = {},
)
  : Promise<T> {
  const serializedVariables = encodeURIComponent(JSON.stringify(variables));

  let result = null;

  try {
    const baseUrl = 'https://swapi-graphql.netlify.app/.netlify/functions/index';

    result = await fetch(
      `${baseUrl}?query=${query}&variables=${serializedVariables}`,
      { method: 'POST' },
    );
  } catch (e) {
    console.error('Error fetching from SWAPI', e);
    throw e;
  }

  if (!result.ok) {
    console.info(await result.text());
    throw new Error(`Error fetching from SWAPI, non 200 status: ${result.status}`);
  }

  return (await result.json()).data as T;
}
