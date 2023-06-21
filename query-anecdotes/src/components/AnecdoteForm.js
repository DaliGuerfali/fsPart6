import { useMutation, useQueryClient } from "react-query";
import anecdoteService from "../services/anecdoteService";
import { createNotif, useNotifDispatch } from "../NotificationContext";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const dispatchNotif = useNotifDispatch();

  const newAnecdoteMutation = useMutation(anecdoteService.createAnecdote, {
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes');
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote));
      dispatchNotif(createNotif(`added '${newAnecdote.content}'`));
    },
    onError: (error) => {
      dispatchNotif(createNotif(error.response.data.error));
    }
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    newAnecdoteMutation.mutate(content);
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
