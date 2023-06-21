import { useMutation, useQuery, useQueryClient } from 'react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import anecdoteService from './services/anecdoteService';
import { createNotif, useNotifDispatch } from './NotificationContext';

const App = () => {

  const queryClient = useQueryClient();
  const dispatchNotif = useNotifDispatch();

  const result = useQuery('anecdotes', anecdoteService.getAnecdotes, {
    retry: false,
    refetchOnWindowFocus: false
  });

  const anecdotes = result.data || [];
  
  const voteMutation = useMutation(anecdoteService.updateAnecdote, {
    onSuccess: (newAnecdote) => {
      queryClient.setQueryData('anecdotes', anecdotes.map(anecdote => {
        return anecdote.id !== newAnecdote.id ? anecdote : newAnecdote;
        }));
      dispatchNotif(createNotif(`voted for '${newAnecdote.content}'`));
    }
    });
    
    
    if(result.isError) {
      console.log(result.error);
      return <p>anecdote service not available due to problems in server</p>;
    }
    
  
  const handleVote = (anecdote) => {
    voteMutation.mutate({...anecdote, votes: anecdote.votes + 1 });
  }


  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
