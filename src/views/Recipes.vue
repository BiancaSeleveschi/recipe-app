<template>
  <div>
    <h1 class="fw-bold">My Menu</h1>
    <div class="border border-dark m-auto mt-3" id="border-menu"></div>
    <h4 class="mt-5 mb-4">Search recipe</h4>
    <div class="mb-3">
      <input
        v-model="searchTitle"
        id="search-input"
        type="text"
        placeholder="Search"
        class="m-auto"
        v-on:keyup.enter="search"
      />
      <button @click="search" class="btn btn-secondary rounded-1">
        Search
      </button>
    </div>
    <div
      v-for="(category, index) in categories"
      :key="index"
      class="d-inline-block m-5"
    >
      <CategoryButton
        :category="category"
        @filter-recipes="filterRecipes(index)"
      />
    </div>
    <ItemList :recipes="filteredRecipes" />
  </div>
</template>

<script>
import CategoryButton from "@/components/CategoryButton";
import ItemList from "@/components/ItemList";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Recipes",
  components: { ItemList, CategoryButton },
  data() {
    return {
      recipes: this.$store.state.recipes,
      filteredRecipes: this.$store.state.recipes,
      categories: this.$store.state.categories,
      indexButtonCategory: -1,
      searchTitle: "",
    };
  },
  methods: {
    search() {
      if (this.searchTitle !== "") {
        this.filteredRecipes = this.recipes.filter((recipe) => {
          return recipe.title
            .toLowerCase()
            .includes(this.searchTitle.toLowerCase());
        });
      } else {
        this.filteredRecipes = this.recipes;
      }
    },
    filterRecipes(index) {
      this.indexButtonCategory =
        this.indexButtonCategory !== index ? index : -1;
      this.filteredRecipes = this.filterByCategory(this.indexButtonCategory);
    },
    filterByCategory(indexButtonCategory) {
      if (indexButtonCategory === 0) {
        return this.recipes;
      }
      return this.$store.getters.getRecipesByCategory(
        this.categories[indexButtonCategory]
      );
    },
  },
};
</script>

<style>
#border-menu {
  width: 100px;
}

#search-input {
  padding-top: 6px;
  padding-bottom: 8px;
  border: none;
  border-radius: 3px;
  outline: none;
}

#search-input:focus {
  background-color: rgba(199, 194, 194, 0.8);
}
</style>
