import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuid } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [
      {
        id: uuid(),
        title: "Norwegian custard buns",
        category: "Breakfast",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/11/Skolbrod-e57ee3a.jpg?quality=90&webp=true&resize=300,272",
        desc: `Start your day with these Norwegian custard buns. They make a great breakfast pastry for lazy weekends, and are filled with custard, then coated in desiccated coconut `,
      },
      {
        id: uuid(),
        title: "American pancakes",
        category: "Breakfast",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/american-style-pancakes-87119e3.jpg?quality=90&webp=true&resize=300,272",
        desc: `Easy, American-style, fluffy pancakes are great for feeding a crowd at breakfast or brunch. Top with something sweet like fruit, jam or syrup, or rashers of crispy bacon. `,
      },
      {
        id: uuid(),
        title: "Healthy pesto eggs on toast",
        category: "Lunch",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Healthy-pesto-eggs-on-toast-2e7feac.jpg?quality=90&webp=true&resize=300,272",
        desc: ` Try a speedy, low-fat pesto as a delicious alternative to oil for frying eggs - it adds great flavour to the dish, too, to make a perfect brunch or lunch `,
      },
      {
        id: uuid(),
        title: "Smoked salmon, quinoa & dill lunch pot",
        category: "Lunch",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/smoked-salmon-quinoa-dill-lunch-pot-0393a04.jpg?quality=90&webp=true&resize=300,272",
        desc: `This easy packed lunch is as delicious as it is nutritious, with crunchy cucumber and radishes and a herby, creamy dressing `,
      },
      {
        id: uuid(),
        title: "Pork souvlaki",
        category: "Dinner",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/pork-souvlaki-1380e9d.jpg?quality=90&webp=true&resize=300,272",
        desc: ` Serve our speedy pork souvlaki skewers when you’re in need of a quick and easy midweek meal. Serve with flatbreads and yogurt and chilli sauces on the side`,
      },
      {
        id: uuid(),
        title: "Easy venison pie",
        category: "Dinner",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/09/Venison-Pie-0fb996b.jpg?quality=90&webp=true&resize=300,272",
        desc: `Make a venison pie packed with pancetta, mushrooms and red wine, topped with golden puff pastry. It's cooked low and slow for beautifully tender meat`,
      },
      {
        id: uuid(),
        title: "Mustard & parmesan- crumbed chicken",
        category: "Dinner",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Mustard-and-parmesan-crumbed-chicken-43562fc.jpg?quality=90&webp=true&resize=300,272",
        desc: `Enjoy our mustard and parmesan-crumbed chicken for an easy midweek meal. With its crunchy, cheesy coating, it's sure to become a new favourite`,
      },
      {
        id: uuid(),
        title: " Lemon & spinach rice with feta",
        category: "Lunch",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/11/Greek-spinach-and-rice-d16d518.jpg?quality=90&webp=true&resize=300,272",
        desc: `Pack in spinach, feta and walnuts into this rice dish. It's bursting with nutrients, including vitamin K, which is important for our skin, hair and bones  `,
      },
      {
        id: uuid(),
        title: "Air fryer bacon",
        category: "Breakfast",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/04/Air-Fryer-Bacon-cc2a084.jpg?quality=90&webp=true&resize=300,272",
        desc: `Cook bacon in an air fryer to achieve a crispy texture with less fat. The perfect bacon sandwich starts here `,
      },

      {
        id: uuid(),
        title: " Bombay potato frittata",
        category: "Lunch",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bombay-potato-frittata-f0d52f5.jpg?quality=90&webp=true&resize=300,272",
        desc: `Pack in the flavour with this Indian-inspired frittata. Perfect for a healthy lunch, it's low in calories and fat and full of nutrients`,
      },
      {
        id: uuid(),
        title: "Chicken pasta bake",
        category: "Dinner",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken_pasta_bake-06fe2d6.jpg?quality=90&webp=true&resize=300,272",
        desc: `Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad`,
      },
      {
        id: uuid(),
        title: "Red pepper & tomato soup",
        category: "Lunch",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/roasted-red-pepper-tomato-soup-with-ricotta-045daff.jpg?quality=90&webp=true&resize=300,272",
        desc: `Liven up a tomato soup with a few easy and tasty additions, including a spoonful of ricotta. It's classic comfort food and also a low-calorie, healthy option`,
      },
    ],
    categories: ["All", "Breakfast", "Lunch", "Dinner"],
  },
  getters: {
    getRecipesByCategory: (state) => (category) => {
      return state.recipes.filter((r) => r.category === category);
    },
    getRecipes(state) {
      return state.recipes;
    },
  },
  mutations: {
    INIT_STORE(state) {
      const data = localStorage.getItem(state.recipes);
      if (data) {
        state.recipes = JSON.parse(data);
      }
    },
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe);
      sessionStorage.setItem("recipes", JSON.stringify(state.recipes));
    },
    DELETE_RECIPE(state, recipe) {
      let index = state.recipes.findIndex((r) => r.id === recipe.id);
      state.recipes.splice(index, 1);
      sessionStorage.setItem("recipes", JSON.stringify(state.recipes));
    },
  },
  actions: {
    addRecipe(context, recipe) {
      context.commit("ADD_RECIPE", recipe);
    },
    deleteRecipe(context, recipe) {
      context.commit("DELETE_RECIPE", recipe);
    },
  },
  modules: {},
});
