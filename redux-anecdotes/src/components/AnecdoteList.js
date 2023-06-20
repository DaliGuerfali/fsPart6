import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { notify } from "../reducers/notifReducer";

const AnecdoteList = () => {
    const dispatch = useDispatch();

    const anecdotes = useSelector(({ anecdotes, filter }) => anecdotes
    .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase())));

    const vote = (id) => {
        dispatch(voteAnecdote(id));
        dispatch(notify(`you voted '${anecdotes.find(anecdote => anecdote.id === id).content}'`));
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