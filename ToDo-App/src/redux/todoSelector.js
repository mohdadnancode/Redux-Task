import { createSelector } from "reselect";

const selectTodosState = state => state.todos;

export const selectAllTodos = createSelector(
  [selectTodosState],
  todos => todos
);