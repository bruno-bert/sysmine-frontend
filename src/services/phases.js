import api from './rest/phases'
import _ from 'lodash'

export default {

    getItems: () => {

        return api.getItems().then((result) => {
            return result.data;
        });

    },


    updateItem: (id, item) => {
        return api.updateItem(id, item).then(result => result.data);
    },

    addItem: (item) => {
        return api.addItem(item).then(result => result.data);
    },

    removeItem: (id) => {
        return api.removeItem(id).then(result => result.data);
    },



}