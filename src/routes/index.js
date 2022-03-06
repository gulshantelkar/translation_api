const express = require('express');
const TranslationController = require("../controller");

const translationRouter = express.Router();
const controller = new TranslationController();

translationRouter.post('/', controller.translate);

module.exports = translationRouter;
