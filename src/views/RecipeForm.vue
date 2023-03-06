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
      v-show="!addedRecipe"
      class="d-block mt-3 m-auto rounded-2 btn btn-primary"
      @click="addRecipe"
    >
      Add
    </button>
    <transition name="fade">
      <div v-if="alert" class="alert alert-success w-50 mx-auto mt-5">
        {{ alert }}
      </div>
    </transition>
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
      addedRecipe: "",
      alert: null,
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
      this.alert = "✔ The recipe has been added to your cart.";
      setTimeout(() => {
        this.alert = null;
      }, 3000);
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
