const mongoose = require('mongoose');

const userCredentialSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
      collection: "credentials",
    }
  );
module.exports = mongoose.model('credentials', userCredentialSchema);