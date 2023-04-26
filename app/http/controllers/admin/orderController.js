// const Order = require("../../../models/order");
// function orderController() {
//   return {
//     index(req, res) {
//       Order.find({ status: { $ne: "completed" } }, null, {
//         sort: { createdAt: -1 },
//       })
//         .populate("customerId", "-password")
//         .exec((err, result) => {
//           res.render("admin/orders");
//         });
//     },
//   };
// }
// module.exports = orderController;

// // In this updated code, the exec() method has been replaced with chained Mongoose methods sort() and lean(), which will return a promise instead of taking a callback function. The async/await syntax has been used to handle the promise and return the results.

// // Also, note that the index() method has been made an asynchronous function, and the try/catch block has been added to handle any errors that may occur. Finally, the orders array is passed to the view template as an object property.

const Order = require("../../../models/order");

function orderController() {
  return {
    async index(req, res) {
      try {
        const orders = await Order.find({ status: { $ne: "completed" } })
          .sort({ createdAt: -1 })
          .populate("customerId", "-password")
          .lean();

        if (req.xhr) {
          return res.json(orders);
        } else {
          return res.render("admin/orders", { orders: orders });
        }
      } catch (err) {
        console.error(err);
      }
    },
  };
}

module.exports = orderController;
