const Order = require("../../../models/order");

function statusController() {
  return {
    async update(req, res) {
      try {
        const updatedOrder = await Order.findByIdAndUpdate(
          req.body.orderId,
          { status: req.body.status },
          { new: true, useFindAndModify: false }
        );
        // Emit event
        const eventEmitter = req.app.get("eventEmitter");
        eventEmitter.emit("orderUpdated", {
          id: req.body.orderId,
          status: req.body.status,
        });
        console.log(updatedOrder);
        return res.redirect("/admin/orders");
      } catch (err) {
        console.log(err);
        return res.redirect("/admin/orders");
      }
    },
  };
}

module.exports = statusController;
