<template>
  <div class="addItem">
    <input type="text" v-model="name" />
    <font-awesome-icon
      icon="plus-circle"
      @click="addItem()"
      :class="[name ? 'active' : 'inactive', 'plus']"
    />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      name: "",
    };
  },
  methods: {
    addItem() {
      if (this.name == "") return;
      axios
        .post("api/items", { name: this.name })
        .then((response) => {
          if (response.status == 201) {
            this.name = "";
            this.$emit("reloadList");
          }
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style scoped>
.addItem {
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  background-color: #f5f5f5;
  width: 100%;
  border: 0;
  border-radius: 50px;
  margin-right: 10px;
  padding: 15px;
  outline: none;
  font-family: "Poppins", sans-serif;
}
.plus {
  font-size: 35px;
}
.active {
  color: #35d0ad;
}
.inactive {
  color: #999999;
}
</style>
