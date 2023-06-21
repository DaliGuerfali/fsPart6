import { useDispatch } from "react-redux";
import { setNotification } from "../reducers/notifReducer";
import { createAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
    const dispatch = useDispatch();

    const create = async (e) => {
        e.preventDefault();
        const content = e.target.anecdote.value;
        dispatch(setNotification(`added '${content}'`, 5));
        dispatch(createAnecdote(content));
        e.target.anecdote.value = '';
      } 

    return (
        <div>
          <h2>create new</h2>
          <form onSubmit={create} >
            <div><input name="anecdote" /></div>
            <button type="submit" >create</button>
          </form>
        </div>
      );
}

export default AnecdoteForm;