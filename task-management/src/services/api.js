import axios from 'axios'

const api = axios.create({
    baseURL:'avaliacao-production.up.railway.app'
})

export default api