import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdoteService";

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      return state.map(anecdote => anecdote.id !== action.payload ? 
        anecdote : {...anecdote, votes: anecdote.votes + 1});
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  }
});


export const { voteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async dispatch => {
    anecdoteService.getAll().then(anecdotes => {
      dispatch(setAnecdotes(anecdotes));
    })
    .catch(err => console.log(err));
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createAnecdote(content);
    dispatch(appendAnecdote(anecdote));
  }
}

export const updateVote = (id, anecdote) => {
  return async (dispatch) => {
    await anecdoteService.updateAnecdote(id, { ...anecdote, votes: anecdote.votes + 1 });
    dispatch(voteAnecdote(id));
  }
}

export default anecdoteSlice.reducer;