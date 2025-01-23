import axios from 'axios'

const api = axios.create({
    baseURL:'junction.proxy.rlwy.net:23267'
})

export default api