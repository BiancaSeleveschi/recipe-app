<template>
  <div>
    <h1 class="fw-bold">Our Menu</h1>
    <div class="border border-bottom w-25 m-auto mt-3"></div>
    <h4 class="m-3">Search recipe</h4>
    <div class="m-auto">
      <input
        v-model="recipeTitle"
        class="p-1"
        type="text"
        placeholder="Search"
      />
      <button class="p-1" id="search-button" @click="search">Search</button>
      <div v-show="showSearchedRecipe">
        <ItemList :recipes="searchedRecipe" />
      </div>
    </div>
    <div
      v-for="(category, index) in categories"
      :key="index"
      class="d-inline-block m-5"
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
      recipeTitle: "",
      recipeTitle2: "",
      showSearchedRecipe: false,
    };
  },
  computed: {
    categories() {
      return this.$store.getters.getAllCategories();
    },
    searchedRecipe() {
      return this.recipes.filter((recipe) =>
        recipe.title.includes(this.recipeTitle)
      );
    },
  },
  methods: {
    filterByCategory(category) {
      return this.$store.getters.getRecipesByCategory(category);
    },
    search() {
      this.showSearchedRecipe = true;
      this.showRecipe = false;
    },
  },
};
</script>

<style>
#search-button {
  border-radius: 7px;
}
</style>
