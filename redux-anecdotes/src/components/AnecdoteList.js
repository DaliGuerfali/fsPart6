import { useDispatch, useSelector } from "react-redux";
import { voteAction } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
    const dispatch = useDispatch();

    const anecdotes = useSelector(({ anecdotes, filter }) => anecdotes
    .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase())));

    const vote = (id) => {
        dispatch(voteAction(id));
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