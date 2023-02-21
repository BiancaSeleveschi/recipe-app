<template class="bg-primary">
  <div>
    <h2 class="mb-4">Add recipe</h2>
    <input
      v-model="newRecipe.title"
      class="d-block m-auto my-2"
      type="text"
      placeholder="Title"
    />
    <input
      v-model="newRecipe.category"
      class="d-block m-auto my-2"
      type="text"
      placeholder="Category"
    />
    <input
      v-model="newRecipe.price"
      class="d-block m-auto my-2"
      type="number"
      placeholder="Price"
    />
    <!--      <input-->
    <!--        v-model="newRecipe.img"-->
    <!--        class="d-block m-auto my-2"-->
    <!--        type="image"-->
    <!--        placeholder="Image"-->
    <!--      />-->
    <input
      v-model="newRecipe.desc"
      class="d-block m-auto my-2"
      type="text"
      placeholder="Description"
    />
    <button
      class="d-block mt-2 m-auto rounded-2 btn btn-primary"
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
        category: "",
        price: "",
        desc: "",
      },
    };
  },
  methods: {
    addRecipe() {
      this.$store.dispatch("addRecipe", this.newRecipe);
      this.newRecipe = {
        title: "",
        category: "",
        price: "",
        desc: "",
      };
    },
  },
};
</script>

<style scoped></style>
