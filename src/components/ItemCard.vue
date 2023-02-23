<template>
  <div class="">
    <div class="p-4 w-100">
      <h2>{{ recipe.title }}</h2>
      <p>{{ recipe.category }}</p>
      <p class="fw-bold">{{ recipe.price }}</p>
      <img :src="recipe.img" width="300" class="m-auto card border-warning" />
    </div>
    <p
      class="mt-3 fst-italic fw-bold"
      id="description"
      @click="showDescription"
    >
      Click for description
    </p>
    <div v-show="showDesc">
      <p class="fst-italic">{{ recipe.desc }}</p>
    </div>
    <button @click="deleteRecipe" class="btn btn-danger">Delete</button>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: ["recipe"],
  data() {
    return {
      showDesc: false,
    };
  },
  methods: {
    deleteRecipe() {
      this.$store.dispatch("deleteRecipe", this.recipe.title);
    },
    showDescription() {
      this.showDesc = !this.showDesc;
    },
  },
};
</script>

<style scoped>
.btn-danger {
  align-self: flex-end;
}

#description:hover {
  color: #076bde;
}
</style>
