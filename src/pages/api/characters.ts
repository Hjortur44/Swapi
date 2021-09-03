/**
 * This is a character infomation page,
 * which is handled on the client side.
 */

import { NextApiRequest, NextApiResponse } from 'next';

import query from '../../graphql/queries';
import { ICharacters } from '../../types';
import { fetchSwapi } from '../../lib/swapi';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const counter = Number(req.body);
  const result = await fetchSwapi<ICharacters>(query.character, { first: counter });

  const newPage = result?.allPeople?.people;
  const newCursor = result?.allPeople?.pageInfo?.endCursor;
  const newNext = result?.allPeople?.pageInfo?.hasNextPage;

  return res.status(200).json({ page: newPage, cursor: newCursor, next: newNext });
};
