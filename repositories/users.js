const crypto = require('crypto');
const util = require('util');
const scrypt = util.promisify(crypto.scrypt);
const Repository = require('./repository');
const mongoose = require('mongoose');
const UserSchema = mongoose.model('users');

class UsersRepository extends Repository {
  constructor(Schema) {
    super(Schema);
  }

  async createPassword(suppliedPassword) {
    const salt = crypto.randomBytes(8).toString('hex');
    const password = await scrypt(suppliedPassword, salt, 64);
    return `${password.toString('hex')}.${salt}`;
  }

  async comparePasswords(savedPassword, suppliedPassword) {
    const [hashed, salt] = savedPassword.split('.');
    const hashedSupplied = await scrypt(suppliedPassword, salt, 64);
    return hashed === hashedSupplied.toString('hex');
  }
}

module.exports = new UsersRepository(UserSchema);
