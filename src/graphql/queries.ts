/**
 * Here are all the SWAPI queries.
 */

import fragments from './fragments';

const character = `query($first: Int) {
  allPeople(first: $first){
     pageInfo {
       hasNextPage
       endCursor
     }
     people {
       id
       name
     }
   }
 }`;

const characterPage = `query($first: Int, $after: String) {
  allPeople(first: $first, after: $after) {
    ...pageInfo
    ...people
   }
   ${fragments.charPageInfo}
   ${fragments.people}
 }`;

const film = `query($id: Int) {
   allFilms(first: $id) {
     films {
       title
       episodeID
       openingCrawl
       characterConnection {
         characters {
           id
           name
         }
       }
     }
   }
 }`;

const person = `query($id: ID!) {
   person(id: $id){
     name
     birthYear
     eyeColor
     hairColor
     height
     mass
   }
 }`;

export default {
  character,
  characterPage,
  film,
  person,
};
