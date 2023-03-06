<template>
  <div>
    <button
      id="category-button"
      @click="filterRecipes"
      :class="{
        'btn btn-outline-dark ': category === 'All',
        'btn btn-outline-danger ': category === 'Breakfast',
        'btn btn-outline-success ': category === 'Lunch',
        'btn btn-outline-warning': category === 'Dinner',
      }"
    >
      {{ category }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CategoryButton",
  props: ["category"],
  methods: {
    filterRecipes() {
      this.$emit("filter-recipes");
    },
  },
};
</script>

<style scoped>
#category-button {
  width: 100px;
}
</style>
