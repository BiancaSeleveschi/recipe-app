<template>
  <div class="container pb-5">
    <div class="row justify-content-between">
      <div
        v-for="(recipe, index) in recipes"
        :key="index"
        class="col-sm-5 col-md-5 col-lg-3 mx-2 my-4 p-3 border border-2 border-dark rounded-2 item"
      >
        <div id="recipe-header" class="pt-2">
          <h2>{{ recipe.title }}</h2>
          <p>{{ recipe.category }}</p>
          <p class="fw-bold">{{ recipe.price }}</p>
        </div>
        <img
          :src="recipe.img"
          width="300"
          alt="Image"
          class="col-sm-11 col-md-11 col-lg-12 m-auto card border-warning"
        />
        <p
          class="mt-3 fst-italic fw-bold"
          id="description"
          @click="changeRecipeIndexForDescription(index)"
        >
          {{
            indexRecipe !== index ? "Click for description" : "Hide description"
          }}
        </p>
        <div v-show="indexRecipe === index">
          <p class="fst-italic">{{ recipe.desc }}</p>
        </div>
        <button @click="deleteRecipe(recipe)" class="btn btn-danger mx-1">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  props: ["recipes"],
  data() {
    return {
      indexRecipe: -1,
    };
  },
  methods: {
    deleteRecipe(recipe) {
      this.$store.dispatch("deleteRecipe", recipe);
    },
    changeRecipeIndexForDescription(index) {
      this.indexRecipe = this.indexRecipe !== index ? index : -1;
    },
  },
};
</script>

<style scoped>
#recipe-header {
  height: 130px;
  align-self: center;
}

.item:hover {
  transform: scale(1.1);
}

.item {
  background: #9f7070;
}

.btn-danger {
  align-self: flex-end;
}

#description {
  color: #070757;
}

#description:hover {
  color: #1235ea;
  cursor: pointer;
}
</style>
