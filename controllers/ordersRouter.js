// Dependencies
const express = require('express');
const ordersRouter = express.Router();
const { mongo, default: mongoose } = require('mongoose');
const StarbucksMenu = require('../models/starbucksMenu');
const Orders = require('../models/order');
const Users = require('../models/user');
const CustomizedItems = require('../models/customizedItem');


ordersRouter.use(express.static("Public"));

//||||||||||||||||||||||||||||||||
//*********** INDEX **************
//||||||||||||||||||||||||||||||||

// User API
ordersRouter.get("/allUsers", async (req, res) => {
    try {
        // displays all Users API
        res.json(await Users.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Order API
ordersRouter.get("/allOrders", async (req, res) => {
    try {
        // displays all Orders API
        res.json(await Orders.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Customized Items API
ordersRouter.get("/allItems", async (req, res) => {
    try {
        // displays all User Customized Items API
        res.json(await CustomizedItems.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Starbucks Menu API
ordersRouter.get("/allMenu", async (req, res) => {
    try {
        // displays all Starbucks Drink Menu API
        res.json(await StarbucksMenu.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

//||||||||||||||||||||||||||||||||
//*********** UPDATE *************
//||||||||||||||||||||||||||||||||

ordersRouter.put("/allUsers/:id", async (req, res) => {
    try {
        // Find User and & Update
        res.json(
            await Users.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});


ordersRouter.put("/allOrders/:id", async (req, res) => {
    try {
        // Find Order & Update
        res.json(
            await Orders.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

ordersRouter.put("/allItems/:id", async (req, res) => {
    try {
        // Find Customized Item & Update
        res.json(
            await CustomizedItems.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

ordersRouter.put("/allMenu/:id", async (req, res) => {
    try {
        // Find Starbucks Drink Menu & Update Item
        res.json(
            await StarbucksMenu.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

//||||||||||||||||||||||||||||||||
//*********** DELETE *************
//||||||||||||||||||||||||||||||||


// Delete User
ordersRouter.delete("/allUsers/:id", async (req, res) => {
    try {
        res.json(await Users.findByIdAndRemove(req.params.id));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// Delete Order
ordersRouter.delete("/allOrders/:id", async (req, res) => {
    try {
        res.json(await Orders.findByIdAndRemove(req.params.id));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// Delete Customized Item
ordersRouter.delete("/allItems/:id", async (req, res) => {
    try {
        res.json(await CustomizedItems.findByIdAndRemove(req.params.id));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});

// Delete Menu Item
ordersRouter.delete("/allMenu/:id", async (req, res) => {
    try {
        res.json(await StarbucksMenu.findByIdAndRemove(req.params.id));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
});


//||||||||||||||||||||||||||||||||
//********** CREATE **************
//||||||||||||||||||||||||||||||||
ordersRouter.post("/allUsers", async (req, res) => {
    try {
        // Create New User
        res.json(await Users.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// *********************************************************************************************
// *********************************************************************************************
//  (^_^) [o_o] (^.^) (".") ($.$) (^_^) [o_o] (^.^) (".") ($.$) (^_^) [o_o] (^.^) (".") ($.$)

ordersRouter.post("/allOrders", async (req, res) => {
    try {
        // Create New (Group) Order
        res.json(await Orders.create(req.body, function (err, docs) {
            ordersId = docs._id
            // console.log(ordersId)
            // Create New User for each invitee
            docs.groupInvite.forEach((invite) => {
                Users.find({ "email": invite }, function (err, foundUser) {
                    // if User exists, push Order to Order's array
                    if (typeof (foundUser[0]) === "object") {
                        console.log(foundUser[0]._id)
                        Users.findByIdAndUpdate(foundUser[0]._id, { $push: { "orderIds": ordersId } }, { new: true }, (err, updated) => {
                            // console.log(updated)
                            // console.log(err)
                        })
                    } else {
                        // create new user
                        console.log("notfound!")
                        Users.create({ "email": invite, "orderIds": ordersId, "isHost": false });
                    }
                })
            })
        }));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// *********************************************************************************************
// *********************************************************************************************

ordersRouter.post("/allItems", async (req, res) => {
    try {
        // Create New Customized Item
        res.json(await CustomizedItems.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
})

ordersRouter.post("/allMenu", async (req, res) => {
    try {
        // Create Starbucks Menu Item
        res.json(await StarbucksMenu.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

//||||||||||||||||||||||||||||||||
//************ SHOW **************
//||||||||||||||||||||||||||||||||

ordersRouter.get("/allOrders/:id", async (req, res) => {
    try {
        // 
        res.json(await Orders.find({ "_id": req.params.id }));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});
// *********************************************************************************************
// *********************************************************************************************
//  (^_^) [o_o] (^.^) (".") ($.$) (^_^) [o_o] (^.^) (".") ($.$) (^_^) [o_o] (^.^) (".") ($.$)

// Show all Items that Match Order ID!!!
ordersRouter.get("/allItems/:orderId", async (req, res) => {
    try {
        res.json(await CustomizedItems.find({ "orderId": req.params.orderId }));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// show all items a user ordered
ordersRouter.get("/allItems/findUser/:userId", async (req, res) => {
    try {
        res.json(await CustomizedItems.find({ "userId": req.params.userId }));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// show all Orders a Host Created
ordersRouter.get("/allOrders/findHost/:hostId", async (req, res) => {
    try {
        res.json(await Orders.find({ "host": req.params.userId }));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// *********************************************************************************************
// *********************************************************************************************

// Export Sessions Router
module.exports = ordersRouter;