<template>
  <div>
    <div class="container">
      <div class="row d-flex justify-content-between">
        <div
          v-for="(recipe, index) in recipes"
          :key="index"
          class="col m-4 p-2 border border-2 border-dark rounded-2 item"
        >
          <ItemCard :recipe="recipe" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";

export default {
  name: "ItemList",
  components: { ItemCard },
  props: ["recipes"],
};
</script>

<style scoped>
.item:hover {
  transform: scale(1.1);
}

.item {
  background: #9f7070;
  /*background: lightblue;*/
}
</style>
