<template>
  <div>
    <h2 class="mb-4">Add recipe</h2>
    <div class="my-3">
      <input
        v-model="newRecipe.title"
        class="d-block m-auto add-recipe-input"
        type="text"
        placeholder="Title"
        required
      />
      <p v-show="showTitleAlert" class="text-danger" id="alert-title">
        Add a title
      </p>
    </div>
    <UploadImages
      v-model="newRecipe.img"
      class="w-75"
      @changed="handleImages"
      :max="4"
      maxError="Max files exceed"
      uploadMsg="upload product images"
      fileError="images files only accepted"
    />
    <textarea
      v-model="newRecipe.desc"
      class="d-block m-auto my-3 textarea"
      type="text"
      placeholder="Description"
      rows="6"
    ></textarea>
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
    <transition name="fade">
      <div
        v-show="showAddingAlert"
        class="alert alert-success w-25 mx-auto mt-5"
        role="alert"
      >
        ✔ The recipe has been added to your list.
      </div>
    </transition>
  </div>
</template>

<script>
import UploadImages from "vue-upload-drop-images";
import { v4 as uuid } from "uuid";

export default {
  name: "RecipeForm",
  components: {
    UploadImages,
  },
  data() {
    return {
      newRecipe: {
        id: uuid(),
        title: "",
        category: this.$store.state.categories[1],
        price: "",
        desc: "",
        img: this.handleImages,
      },
      categories: ["Breakfast", "Lunch", "Dinner"],
      showAddingAlert: false,
      showTitleAlert: false,
    };
  },
  mounted() {
    console.log(this.newRecipe.img);
  },
  methods: {
    addRecipe() {
      this.showTitleAlert = this.newRecipe.title === "";
      this.showAddingAlert = !this.showTitleAlert;
      if (this.showAddingAlert) {
        this.$store.dispatch("addRecipe", this.newRecipe);
        setTimeout(this.clear, 3000);
      }
    },
    clear() {
      this.showAddingAlert = false;
    },
    handleImages(files) {
      console.log("files");
      console.log(files);
      this.newRecipe.img = files;
    },
  },
};
</script>

<style scoped>
#alert-title {
  margin-right: 155px;
  font-size: 14px;
}

.add-recipe-input {
  width: 230px;
}
.textarea {
  width: 35%;
  outline: none;
}
@media (max-width: 576px) {
  .textarea {
    width: 80%;
  }
}

.add-recipe-input,
.add-recipe-select {
  padding: 7px;
  border: none;
  border-radius: 3px;
  outline: none;
}
</style>
