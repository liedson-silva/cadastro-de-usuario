import axios from 'axios'

const api = axios.create({
    baseURL: 'https://cadastro-de-usuario-w9ki.vercel.app'
})

export default api