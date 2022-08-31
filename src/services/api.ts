import axios from 'axios'


const api = axios.create({baseURL: 'https://nexus-gamestand-server.herokuapp.com'})

export default api