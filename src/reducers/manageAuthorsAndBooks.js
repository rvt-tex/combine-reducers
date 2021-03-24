
import { combineReducers } from "redux";
import uuid from "uuid";
const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});

export default rootReducer;

function booksReducer(state = [], action) {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book];

    case "REMOVE_BOOK":
      return [...state.filter(book => book.id !== action.id)];

    default:
      return state;
  }
}

function authorsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author];

    case "REMOVE_AUTHOR":
      return [...state.filter(author => author.id !== action.id)];

    case "ADD_BOOK":
      return state.filter(
        author => author.authorName === action.book.authorName
      ).length > 1
        ? state
        : [...state, { authorName: action.book.authorName, id: uuid() }];

    default:
      return state;
  }
}