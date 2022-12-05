const Repository = require('./repository');
const mongoose = require('mongoose');
const UserSchema = mongoose.model('users');

class UsersRepository extends Repository {
  constructor(Schema) {
    super(Schema);
  }
}

module.exports = new UsersRepository(UserSchema);
