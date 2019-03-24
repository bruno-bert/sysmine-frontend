import {
    http
} from './base'

const endpoint = 'fases';

export default {

    getItems: () => {
        return http.get(`${endpoint}`)
    },

    addItem: (item) => {
        return http.post(`${endpoint}`, item)
    },

    updateItem: (id, item) => {
        console.log('update id', id);
        console.log('update item', item);

        return http.put(`${endpoint}/${id}`, item)
    },

    removeItem: (id) => {
        return http.delete(`${endpoint}/${id}`)
    },


}