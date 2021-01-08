import { sortData } from '../util';

export const sortByTitle = (state) => sortData(state, "title");
export const sortByDescription = (state) => sortData(state, "description");
