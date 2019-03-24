import axios from 'axios'
import toast from '@/plugins/toast'


const http = axios.create({
    baseURL: `http://localhost:3333/`,
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU1MjE0NDI3OX0.fsslpSPGVaSIx9pNe3oEzfbm5qTYnyegSV5S_G_KNaQ'
    }
})

/* handles http server repsonse errors globally */
http.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {

        if (error.response) {

            if (error.response.data.error) {

                console.log('Error Status Code', error.response.status)
                console.log('Error Message', error.response.data.error.message)
                toast.error(error.response.data.error.message);

            } else {

                console.log('Error Status Code', error.response.status)
                console.log('Error Message', error.message)
                toast.error(error.message);

            }

        }
    });


export {
    http
}