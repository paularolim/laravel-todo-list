<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <list-item
        :item="item"
        class="item"
        v-on:itemChanged="$emit('reloadList')"
      />
    </div>
  </div>
</template>

<script>
import listItem from "../components/listItem";

export default {
  props: ["items"],
  components: { listItem },
};
</script>

<style scoped>
.item {
  background-color: #f5f5f5;
  border-radius: 50px;
  padding: 15px;
  margin-top: 5px;
}
</style>
