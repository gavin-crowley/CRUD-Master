// Importing important packages
const express = require('express');

// Using express and routes
const app = express();
const itemRoute = express.Router();

// Employee module which is required and imported
let itemModel = require('../Model/Item');

// To Get List Of Employees
itemRoute.route('/').get(function (req, res) {
    itemModel.find(function (err, item) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(item);
        }
    });
});

// To Add New Employee
itemRoute.route('/addItem').post(function (req, res) {
    let item = new itemModel(req.body);
    console.log(item)
    item.save()
        .then(game => {
            res.status(200).json({ 'item': 'Item Added Successfully' });
        })
        .catch(err => {
            res.status(400).send("Something Went Wrong");
        });
});

// To Get qee Details By Employee ID
// itemRoute.route('/editItem/:id').get(function (req, res) {
//     let id = req.params.id;
//     itemModel.findById(id, function (err, item) {
//         res.json(item);
//     });
// });

//  To Update The Employee Details
// employeeRoute.route('/updateEmployee/:id').post(function (req, res) {
//     employeeModel.findById(req.params.id, function (err, employee) {
//         if (!employee)
//             return next(new Error('Unable To Find Employee With This Id'));
//         else {
//             employee.firstName = req.body.firstName;
//             employee.lastName = req.body.lastName;
//             employee.email = req.body.email;
//             employee.phone = req.body.phone;

//             employee.save().then(emp => {
//                 res.json('Employee Updated Successfully');
//             })
//                 .catch(err => {
//                     res.status(400).send("Unable To Update Employee");
//                 });
//         }
//     });
// });

// To Delete The Employee
itemRoute.route('/deleteItem/:id').get(function (req, res) {
    itemModel.findByIdAndRemove({ _id: req.params.id }, function (err, item) {
        if (err) res.json(err);
        else res.json('Item Deleted Successfully');
    });
});

module.exports = itemRoute;