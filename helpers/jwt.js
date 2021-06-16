const jsonwebtoken = require("jsonwebtoken");
const { join } = require("lodash");
const responseMessages = require("../constants/responseMessages");
const { validate } = require("../models/user");
const validateData = require("../utils/validateData");

const jwt = {};

jwt.signToken = (data) => {
  if (validateData.isEmpty(data)) {
    throw Error(JSON.stringify(responseMessages.invalidData));
  }

  if (validateData.isEmpty(process.env.JWT_SECRET)) {
    throw Error(JSON.stringify(responseMessages.tokenCreationFailed));
  }

  const token = jsonwebtoken.sign(data, process.env.JWT_SECRET, {
    expiresIn: "1d"
  })

  if (validateData.isEmpty(token)) {
    throw Error(JSON.stringify(responseMessages.tokenCreationFailed));
  }

  return token;
}

jwt.verifyToken = (token) => {
  try {
    if (validateData.isEmpty(token)) {
      throw Error(JSON.stringify(responseMessages.unauthorized));
    }

    const decodedData = jsonwebtoken.verify(token, process.env.JWT_SECRET);

    if (validateData.isEmpty(decodedData)) {
      throw Error(JSON.stringify(responseMessages.unauthorized));
    }

    return decodedData;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

module.exports = jwt;