import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
          },
        };
      },
    },

    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },

    editTodo(state, action) {
      const { id, text } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) {
        todo.text = text;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
