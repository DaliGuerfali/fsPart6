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

const updateAnecdote = async (id, newAnecdote) => {
    const response = await axios.put(`${baseUrl}/${id}`, newAnecdote);
    return response.data;
}

export default { getAll, createAnecdote, updateAnecdote }