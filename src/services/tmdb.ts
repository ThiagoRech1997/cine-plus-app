import axios from 'axios'

const tmdb = axios.create({
    baseURL: import.meta.env.VITE_TMDB_API_URL
})

export default tmdb