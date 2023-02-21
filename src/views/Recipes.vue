<template>
  <div>
    <h1 class="fw-bold">Our Menu</h1>
    <div class="border border-bottom w-25 m-auto mt-3"></div>
    <div
      v-for="(category, index) in categories"
      :key="index"
      class="d-inline-block m-3"
    >
      <CategoryButtons
        :category="category"
        @show-recipe="
          indexButtonCategory = indexButtonCategory !== index ? index : -1
        "
      />
      <div v-if="category === 'All' && showRecipe">
        <ItemList :recipes="recipes" />
      </div>
      <div v-else-if="indexButtonCategory === index">
        <ItemList :recipes="filterByCategory(category)" />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryButtons from "@/components/CategoryButtons";
import ItemList from "@/components/ItemList";

export default {
  name: "RecipeList",
  components: { ItemList, CategoryButtons },
  data() {
    return {
      indexButtonCategory: -1,
      showRecipe: true,
      recipes: this.$store.state.recipes,
    };
  },
  computed: {
    categories() {
      return this.$store.getters.getAllCategories();
    },
  },
  methods: {
    filterByCategory(category) {
      this.showRecipe = false;
      return this.$store.getters.getRecipesByCategory(category);
    },
  },
};
</script>

<style></style>
