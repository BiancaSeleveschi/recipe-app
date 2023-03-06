import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [
      {
        title: "American pancakes",
        category: "Breakfast",
        price: "$18.99",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/american-style-pancakes-87119e3.jpg?quality=90&webp=true&resize=300,272",
        desc: `Easy, American-style, fluffy pancakes are great for feeding a crowd at breakfast or brunch. Top with something sweet like fruit, jam or syrup, or rashers of crispy bacon. `,
      },
      {
        title: "Healthy pesto eggs on toast",
        category: "Lunch",
        price: "$16.99",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Healthy-pesto-eggs-on-toast-2e7feac.jpg?quality=90&webp=true&resize=300,272",
        desc: ` Try a speedy, low-fat pesto as a delicious alternative to oil for frying eggs - it adds great flavour to the dish, too, to make a perfect brunch or lunch `,
      },
      {
        title: "Easy venison pie",
        category: "Dinner",
        price: "$19.99",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/09/Venison-Pie-0fb996b.jpg?quality=90&webp=true&resize=300,272",
        desc: `Make a venison pie packed with pancetta, mushrooms and red wine, topped with golden puff pastry. It's cooked low and slow for beautifully tender meat`,
      },
      {
        title: "Pork souvlaki",
        category: "Dinner",
        price: "$21.99",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/pork-souvlaki-1380e9d.jpg?quality=90&webp=true&resize=300,272",
        desc: ` Serve our speedy pork souvlaki skewers when you’re in need of a quick and easy midweek meal. Serve with flatbreads and yogurt and chilli sauces on the side`,
      },
      {
        title: "Air fryer bacon",
        category: "Breakfast",
        price: "$15.99",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/04/Air-Fryer-Bacon-cc2a084.jpg?quality=90&webp=true&resize=300,272",
        desc: `Cook bacon in an air fryer to achieve a crispy texture with less fat. The perfect bacon sandwich starts here `,
      },
      {
        title: "Smoked salmon, quinoa & dill lunch pot",
        category: "Lunch",
        price: "$22.99",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/smoked-salmon-quinoa-dill-lunch-pot-0393a04.jpg?quality=90&webp=true&resize=300,272",
        desc: `This easy packed lunch is as delicious as it is nutritious, with crunchy cucumber and radishes and a herby, creamy dressing `,
      },
      {
        title: "Mustard & parmesan- crumbed chicken",
        category: "Dinner",
        price: "$26.99",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Mustard-and-parmesan-crumbed-chicken-43562fc.jpg?quality=90&webp=true&resize=300,272",
        desc: `Enjoy our mustard and parmesan-crumbed chicken for an easy midweek meal. With its crunchy, cheesy coating, it's sure to become a new favourite`,
      },
      {
        title: "Norwegian custard buns",
        category: "Breakfast",
        price: "$8.99",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/11/Skolbrod-e57ee3a.jpg?quality=90&webp=true&resize=300,272",
        desc: `Start your day with these Norwegian custard buns. They make a great breakfast pastry for lazy weekends, and are filled with custard, then coated in desiccated coconut `,
      },
      {
        title: " Lemon & spinach rice with feta",
        category: "Lunch",
        price: "$24.99",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/11/Greek-spinach-and-rice-d16d518.jpg?quality=90&webp=true&resize=300,272",
        desc: `Pack in spinach, feta and walnuts into this rice dish. It's bursting with nutrients, including vitamin K, which is important for our skin, hair and bones  `,
      },
      {
        title: " Bombay potato frittata",
        category: "Lunch",
        price: "$21.49",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bombay-potato-frittata-f0d52f5.jpg?quality=90&webp=true&resize=300,272",
        desc: `Pack in the flavour with this Indian-inspired frittata. Perfect for a healthy lunch, it's low in calories and fat and full of nutrients`,
      },
      {
        title: "Chicken pasta bake",
        category: "Dinner",
        price: " $24.99",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken_pasta_bake-06fe2d6.jpg?quality=90&webp=true&resize=300,272",
        desc: `Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad`,
      },
      {
        title: "Red pepper & tomato soup",
        category: "Lunch",
        price: "$12.99",
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
  },
  mutations: {
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe);
    },
    DELETE_RECIPE(state, title) {
      let index = state.recipes.findIndex((recipe) => recipe.title === title);
      state.recipes.splice(index, 1);
    },
  },
  actions: {
    addRecipe(context, recipe) {
      context.commit("ADD_RECIPE", recipe);
    },
    deleteRecipe(context, title) {
      context.commit("DELETE_RECIPE", title);
    },
  },
  modules: {},
});
