/**
 * This file contains interfaces for fragmentation.
 */

export interface ICharacters {
  allPeople: {
    pageInfo: IPageInfo;
    totalCount: number;
    people: ICharacter[];
  }
}

export interface ICharacter {
  id: string;
  name: string;
}

export interface IAllFilms {
  allFilms: {
    films: IFilm[];
  }
}

export interface IFilm {
  title: string;
  episodeID: number;
  openingCrawl: string;
  characterConnection: ICharacterConnection;
}

export interface IPerson {
  person: {
    name: string;
    birthYear: string;
    eyeColor: string;
    hairColor: string;
    height: number;
    mass: number;
  }
}

interface IPageInfo {
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string
}

interface ICharacterConnection {
  characters: ICharacter[];
}
