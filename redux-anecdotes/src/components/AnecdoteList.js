import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../reducers/notifReducer";
import { updateAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
    const dispatch = useDispatch();

    const anecdotes = useSelector(({ anecdotes, filter }) => anecdotes
    .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase())));

    const vote = (id) => {
        const anecdote = anecdotes.find(anecdote => anecdote.id === id);
        dispatch(updateAnecdote(id, anecdote));
        dispatch(setNotification(`you voted '${anecdote.content}'`, 5)); 
      }

    return (
    <>
        {
        anecdotes
        .toSorted((a, b) => b.votes - a.votes)
        .map(anecdote =>
            <div key={anecdote.id}>
                <div>
                  {anecdote.content}
                </div>
                <div>
                  has {anecdote.votes}
                  <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
              </div>
            )
         }
    </>
    );
}

export default AnecdoteList;