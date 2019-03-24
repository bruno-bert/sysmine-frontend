import axios from 'axios'

export const http = axios.create({
    baseURL: `http://localhost:3333/`,
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU1MjE0NDI3OX0.fsslpSPGVaSIx9pNe3oEzfbm5qTYnyegSV5S_G_KNaQ'
    }
})