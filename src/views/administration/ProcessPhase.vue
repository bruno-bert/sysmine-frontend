<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <v-card>
            <v-toolbar card color="white">
              <v-text-field
                flat
                solo
                prepend-icon="search"
                :placeholder="$t('app.search')"
                v-model="search"
                hide-details
                class="hidden-sm-and-down"
              ></v-text-field>
              <v-btn icon>
                <v-icon>filter_list</v-icon>
              </v-btn>
            </v-toolbar>

            <v-divider></v-divider>

            <v-card-text class="pa-0">
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark class="mb-2" v-on="on">{{ $t("app.new") }}</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12 sm6 md4>
                          <v-text-field
                            v-model="editedItem.descricao"
                            :label="$t('administration.process-phase.description')"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="close">{{ $t("app.cancel") }}</v-btn>
                    <v-btn color="blue darken-1" flat @click="save">{{ $t("app.save") }}</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-data-table
                :headers="headers"
                :search="search"
                :items="items"
                :rows-per-page-items="[10,25,50,{text:'All','value':-1}]"
                class="elevation-1"
                item-key="id"
                v-model="selected"
              >
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.id }}</td>
                  <td>{{ props.item.descricao }}</td>
                  <td>{{ props.item.updated_at }}</td>
                  <td>
                    <v-btn depressed outline icon fab dark color="primary" small>
                      <v-icon small @click="editMode(props.item)">edit</v-icon>
                    </v-btn>
                    <v-btn depressed outline icon fab dark color="pink" small>
                      <v-icon small @click="deleteItem(props.item)">delete</v-icon>
                    </v-btn>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      dialog: false,
      loading: false,
      search: "",
      editedIndex: -1,
      editedItem: {
        descricao: ""
      },
      defaultItem: {
        descricao: ""
      },

      selected: [],

      headers: [
        {
          text: this.$t("app.id"),
          value: "id"
        },
        {
          text: this.$t("administration.process-phase.description"),
          value: "descricao"
        },
        {
          text: this.$t("app.updated_at"),
          value: "updated_at"
        },
        {
          text: this.$t("app.action"),
          value: ""
        }
      ]
    };
  },

  mounted() {
    this.initialize();
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  computed: {
    ...mapGetters({
      items: "phases/getItems"
    }),

    formTitle() {
      return this.editedIndex === -1 ? this.$t("app.new") : this.$t("app.edit");
    }
  },

  methods: {
    ...mapActions({
      loadItems: "phases/loadItems",
      addItem: "phases/addItem",
      updateItem: "phases/updateItem",
      removeItem: "phases/removeItem"
    }),

    initialize() {
      this.fetch();
    },

    fetch() {
      this.loading = true;
      this.loadItems().then(() => {
        this.loading = false;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem);
        this.updateItem({ id: this.editedItem.id, item: this.editedItem }).then(
          () => {
            this.showAlert();
          }
        );
      } else {
        this.addItem(this.editedItem).then(() => {
          this.showAlert();
        });
      }
      this.close();
    },

    editMode(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      confirm(this.$t("app.confirm_delete")) &&
        this.removeItem(item.id).then(() => {
          this.showAlert();
        });
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    showAlert() {}
  }
};
</script>
