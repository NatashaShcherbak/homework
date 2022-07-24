const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserTemplate = Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        createDate: {
            type: Date,
            default: new Date(),
        },
        updateDate: {
            type: Date,
            default: new Date(),
        },
    },
    { versionKey: false }
);

const UsersModel = mongoose.model("Users", UserTemplate);

module.exports = UsersModel;
