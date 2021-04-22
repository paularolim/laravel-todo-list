<template>
  <div class="item">
    <font-awesome-icon
      v-if="item.completed"
      icon="check-circle"
      @click="updateCheck(false)"
      class="iconCompleted"
    />
    <font-awesome-icon
      class="iconIncompleted"
      @click="updateCheck(true)"
      v-else
      icon="circle"
    />

    <span :class="[item.completed ? 'completed' : '', 'itemText']">
      {{ item.name }}
    </span>

    <button @click="removeItem()" class="trash">
      <font-awesome-icon icon="trash" />
    </button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    updateCheck(state) {
      axios
        .put(`api/items/${this.item.id}`, { completed: state })
        .then((response) => {
          if (response.status == 200) this.$emit("itemChanged");
        })
        .catch((error) => console.error(error));
    },
    removeItem() {
      axios
        .delete(`api/items/${this.item.id}`)
        .then((response) => {
          if (response.status == 200) this.$emit("itemChanged");
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>

<style scoped>
.iconCompleted {
  color: #35d0ad;
  font-size: 20px;
  cursor: pointer;
}
.iconIncompleted {
  color: #eb6764;
  font-size: 20px;
  cursor: pointer;
}
.completed {
  text-decoration: line-through;
  color: #999999;
}
.itemText {
  width: 100%;
  margin-left: 20px;
  font-size: 16px;
  color: #5a5a5a;
}
.item {
  display: flex;
  justify-content: center;
}
.trash {
  background-color: #f5f5f5;
  border: none;
  color: #eb6764;
  outline: none;
  font-size: 16px;
  cursor: pointer;
}
</style>
