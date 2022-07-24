const express = require('express');
const mongoose = require('mongoose');
const UsersModel = require('./user-template');
const script = express();

mongoose.connect('mongodb+srv://adminName:Hillel2021@cluster0.vozityb.mongodb.net/?retryWrites=true&w=majority', {}, () => {
    console.log('DB is online');
})

script.use(express.json());

script.post('/users', (req, res) => {
    const user = new UsersModel(req.body);
    user.save().then(result =>  res.send(result));
})

script.get('/users', (req, res) => {
    UsersModel.find().then((result) => res.send(result));
})

script.get('/users/:id', (req, res) => {
    const id = req.params.id;
    UsersModel.find({ _id: id }).then((r) => res.send(r));
})

script.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = req.body;
    UsersModel.updateOne({ _id: id }, user)
        .then((r) => UsersModel.findById(id))
        .then((r) => res.send(r))
        .catch((error) => res.status(400).send(error));
})

script.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    UsersModel.deleteOne({_id: id})
        .then((r) => "Success")
        .then((r) => res.send(r));
})

script.listen(3005, () => {
    console.log(`Dev started at PORT 3005`);
});

