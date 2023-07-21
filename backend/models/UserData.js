const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema(
    {
        day: { type: String, required: true },
        description: { type: String, required: true },
    },
    {
      collection: "users",
    }
);
module.exports = mongoose.model('users', userDataSchema);
