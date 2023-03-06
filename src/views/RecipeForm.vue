<template>
  <div>
    <h2 class="mb-4">Add recipe</h2>
    <input
      v-model="newRecipe.title"
      class="d-block m-auto my-2 add-recipe-input"
      type="text"
      placeholder="Title"
    />
    <input
      v-model="newRecipe.price"
      class="d-block m-auto my-2 add-recipe-input"
      type="number"
      placeholder="Price"
    />
    <!--      <input-->
    <!--        v-model="newRecipe."-->
    <!--        class="d-block m-auto my-2"-->
    <!--        type="image"-->
    <!--        placeholder="Image"-->
    <!--      />-->
    <input
      v-model="newRecipe.desc"
      class="d-block m-auto my-2 add-recipe-input"
      type="text"
      placeholder="Description"
    />
    <select
      class="d-block m-auto my-2 rounded-2 add-recipe-select"
      v-model="newRecipe.category"
      required
    >
      <option v-for="(category, index) in categories" :key="index">
        {{ category }}
      </option>
    </select>
    <button
      class="d-block mt-3 m-auto rounded-2 btn btn-primary"
      @click="addRecipe"
    >
      Add
    </button>
  </div>
</template>

<script>
export default {
  name: "RecipeForm",
  data() {
    return {
      newRecipe: {
        title: "",
        category: this.$store.state.categories[1],
        price: "",
        desc: "",
      },
      categories: ["Breakfast", "Lunch", "Dinner"],
    };
  },
  methods: {
    addRecipe() {
      this.$store.dispatch("addRecipe", this.newRecipe);
      this.newRecipe = {
        title: "",
        category: this.$store.state.categories[1],
        price: "",
        desc: "",
      };
    },
  },
};
</script>

<style scoped>
.add-recipe-input {
  width: 230px;
}

.add-recipe-input,
.add-recipe-select {
  padding: 5px;
  border: none;
  border-radius: 3px;
  outline: none;
}
</style>
