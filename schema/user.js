const mongoose = require('mongoose');
const User = mongoose.model('User', { name: String, cpf: String});
module.exports = User;