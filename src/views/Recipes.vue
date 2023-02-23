<template>
  <div>
    <h1 class="fw-bold">Our Menu</h1>
    <div class="border border-dark m-auto mt-3" id="border-menu"></div>
    <h4 class="mt-5 mb-4">Search recipe</h4>
    <div class="m-auto">
      <input
        v-model="recipeTitle"
        class="p-1"
        type="text"
        placeholder="Search"
        v-on:keyup.enter="search"
      />
      <button class="p-1" id="search-button" @click="search">Search</button>
    </div>
    <div
      v-for="(category, index) in categories"
      :key="index"
      class="d-inline-block m-5"
    >
      <CategoryButton
        :category="category"
        @show-recipe="filterRecipes(index)"
      />
    </div>
    <div>
      <ItemList :recipes="filteredRecipes" />
    </div>
  </div>
</template>

<script>
import CategoryButton from "@/components/CategoryButton";
import ItemList from "@/components/ItemList";

export default {
  name: "RecipeList",
  components: { ItemList, CategoryButton },
  data() {
    return {
      recipes: this.$store.state.recipes,
      indexButtonCategory: -1,
      showSearchedRecipe: false,
      recipeTitle: "",
      filteredRecipes: [],
    };
  },
  computed: {
    categories() {
      return this.$store.getters.getAllCategories();
    },
  },
  methods: {
    filterByCategory(indexButtonCategory) {
      if (indexButtonCategory === 0) {
        return this.recipes;
      }
      return this.$store.getters.getRecipesByCategory(
        this.categories[indexButtonCategory]
      );
    },
    search() {
      if (this.recipeTitle !== "") {
        this.filteredRecipes = this.recipes.filter((recipe) =>
          recipe.title.includes(this.recipeTitle)
        );
      }
    },
    filterRecipes(index) {
      this.indexButtonCategory =
        this.indexButtonCategory !== index ? index : -1;
      this.filteredRecipes = this.filterByCategory(this.indexButtonCategory);
    },
  },
};
</script>

<style>
#search-button {
  border-radius: 0px 7px 7px 0px;
}

#search-button:hover {
  background: #c7c7c7;
}

#border-menu {
  width: 100px;
}
</style>
