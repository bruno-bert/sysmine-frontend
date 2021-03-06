import repository from "@/services/phases";

export default {
  namespaced: true,

  state: {
    items: [],
    status: 0,
    message: ''
  },

  getters: {
    getItems: state => state.items,
    getMessage: state => state.message,
    getStatus: state => state.status,
  },


  mutations: {

    SET_RESPONSE: (state, {
      status,
      message
    }) => {
      state.status = status
      state.message = message
    },


    SET_ITEMS: (state, items) => {
      state.items = items
    },


    ADD_ITEM: (state, item) => {
      state.items.push(item);
    },

    UPDATE_ITEM: (state, {
      id,
      item
    }) => {

      let theItem = state.items.find(item => item.id === id);
      let index = state.items.indexOf(theItem);
      state.items.splice(index, 1, item);

    },


    REMOVE_ITEM: (state, id) => {
      let theItem = state.items.find(item => item.id === id);
      let index = state.items.indexOf(theItem);
      state.items.splice(index, 1);
    },




  },

  actions: {

    async loadItems({
      commit
    }) {
      repository.getItems().then(result => {
        commit('SET_ITEMS', result.data)
      });
    },

    async addItem({
      commit
    }, item) {

      repository.addItem(item).then(result => {
        commit('ADD_ITEM', result.data)
      });

    },

    async updateItem({
      commit
    }, {
      id,
      item
    }) {

      repository.updateItem(id, item).then(result => {
        commit('UPDATE_ITEM', {
          id,
          item: result.data
        })
      })

    },

    async removeItem({
        commit
      },
      id
    ) {

      repository.removeItem(id).then(result => {
        commit('REMOVE_ITEM', id)
      })

    }

  }



}