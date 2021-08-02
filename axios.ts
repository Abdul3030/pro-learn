import axios from 'axios';


const api = axios.create({
    baseURL: 'https://fd121012-5498-4dd0-91c1-6ab477550298.mock.pstmn.io',
    headers: {'Content-Type': 'application/json'}
});

export default api;