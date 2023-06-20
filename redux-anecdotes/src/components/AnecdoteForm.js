import { useDispatch } from "react-redux";
import { anecdoteAction } from "../reducers/anecdoteReducer";


const AnecdoteForm = () => {
    const dispatch = useDispatch();

    const createAnecdote = (e) => {
        e.preventDefault();
        dispatch(anecdoteAction(e.target.anecdote.value));
        e.target.anecdote.value = '';
      } 

    return (
        <div>
          <h2>create new</h2>
          <form onSubmit={createAnecdote} >
            <div><input name="anecdote" /></div>
            <button type="submit" >create</button>
          </form>
        </div>
      );
}

export default AnecdoteForm;