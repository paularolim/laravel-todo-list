<template>
  <div class="container">
    <div class="heading">
      <h2 id="title">Todo List</h2>
      <add-item-form v-on:reloadList="getItems()" />
    </div>
    <list-view :items="items" v-on:reloadList="getItems()" />
  </div>
</template>

<script>
import addItemForm from "../components/addItemForm";
import listView from "../components/listView";

export default {
  components: {
    addItemForm,
    listView,
  },
  data: () => {
    return {
      items: [],
    };
  },
  methods: {
    getItems() {
      axios
        .get("api/items")
        .then((response) => (this.items = response.data))
        .catch((error) => console.error(error));
    },
  },
  created() {
    this.getItems();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
.container {
  width: 350px;
  margin: auto;
  font-family: "Poppins", sans-serif;
}
.heading {
  background-color: #eaebee;
  padding-bottom: 10px;
}

#title {
  text-align: center;
}
</style>
