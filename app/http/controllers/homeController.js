const menu = require("../../models/menu");
function homeController() {
  //fatory functions return a object that contians some methods inside it present some login
  return {
    async index(req, res) {
      const pizzas = await menu.find();
      return res.render("home", { pizzas: pizzas });
    },
  };
}

module.exports = homeController;
//u can write this but we hve modern way to write okay
// return {
//   index: function () {

//  }
// };
