import axios from 'axios'

const api = axios.create({
    baseURL: 'https://cadastro-de-usuario-o1p8.vercel.app'
})

export default api