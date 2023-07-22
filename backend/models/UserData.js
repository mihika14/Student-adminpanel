const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        rollno: { type: Number, required: true },
        section: { type: String, required: true }
    },
    {
      collection: "users",
    }
);
module.exports = mongoose.model('users', userDataSchema);
