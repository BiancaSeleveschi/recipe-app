<template>
  <div>
    <div class="container">
      <div class="row d-flex justify-content-between">
        <div
          v-for="(recipe, index) in recipes"
          :key="index"
          class="col m-4 p-4 border border-2 border-dark rounded-2 item"
        >
          <h2>{{ recipe.title }}</h2>
          <p>{{ recipe.category }}</p>
          <p class="fw-bold">{{ recipe.price }}</p>
          <img
            :src="recipe.img"
            width="300"
            class="m-auto card border-warning"
          />
          <p
            class="mt-3 fst-italic fw-bold"
            id="description"
            @click="showDescription"
          >
            {{ !showDesc ? "Click for description" : "Hide description" }}
          </p>
          <div v-show="showDesc">
            <p class="fst-italic">{{ recipe.desc }}</p>
          </div>
          <button @click="deleteRecipe(recipe.title)" class="btn btn-danger">
            Delete
          </button>
        </div>
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
      showDesc: false,
    };
  },
  methods: {
    deleteRecipe(title) {
      this.$store.dispatch("deleteRecipe", title);
    },
    showDescription() {
      this.showDesc = !this.showDesc;
    },
  },
};
</script>

<style scoped>
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
