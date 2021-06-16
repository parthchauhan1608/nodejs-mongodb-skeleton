const User = require("../../models/user");
const validateData = require("../../utils/validateData");
const responseMessages = require("../../constants/responseMessages");

const services = {};

/* 
  @description fetches a user from the database
  @params query - query for fetching the user
*/
services.getUser = async (query, deselect) => {
  if (validateData.isEmpty(query)) {
    throw Error(JSON.stringify(responseMessages.invalidData));
  }

  const user = await User.findOne(query).select(deselect);

  return user;
}

services.getUsers = async (query) => {
  const users = await User.find(query);

  return users;
}

services.createUser = async (user) => {
  const newUser = new User(user);
  await newUser.save();

  return newUser;
}

services.updateUser = async (id, updatedUser) => {
  const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });

  return user;
}

module.exports = services;