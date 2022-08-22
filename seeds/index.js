const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedRecipe = require("./recipeData");
const seedComments = require("./commentData");
const seedCategory = require("./categoryData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedCategory();

  await seedRecipe();

  await seedComments();

  process.exit(0);
};

seedAll();
