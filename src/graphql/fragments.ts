/**
 * This file fragment down infomation,
 * which helps combatting overflow.
 */

const charPageInfo = `
  fragment pageInfo on PeopleConnection {
    pageInfo {
      hasNextPage
      endCursor
    }
  }`;

const people = `
  fragment people on PeopleConnection {
    people {
      id
      name
    }
  }`;

export default {
  charPageInfo,
  people,
};
