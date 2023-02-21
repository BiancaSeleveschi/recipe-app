<template>
  <div>
    <button
      class="d-grid gap-2 d-md-block"
      @click="showRecipes"
      :class="{
        'btn btn-outline-dark d-grid gap-2 d-md-block': category === 'All',
        'btn btn-outline-danger d-grid gap-2 d-md-block':
          category === 'Breakfast',
        'btn btn-outline-success d-grid gap-2 d-md-block': category === 'Lunch',
        'btn btn-outline-warning d-grid gap-2 d-md-block':
          category === 'Dinner',
      }"
    >
      {{ category }}
    </button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Buttons",
  props: ["category"],
  methods: {
    showRecipes(category) {
      this.$emit("show-recipe", category);
    },
  },
};
</script>

<style scoped></style>
