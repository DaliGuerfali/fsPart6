import axios from 'axios';
const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

const createAnecdote = async (content) => {
    const response = await axios.post(baseUrl, { content, votes: 0 });
    return response.data;
}

const voteAnecdote = async (id, anecdote) => {
    const response = await axios.put(`${baseUrl}/${id}`, { ...anecdote, votes: anecdote.votes + 1 } );
    return response.data;
}

export default { getAll, createAnecdote, voteAnecdote }