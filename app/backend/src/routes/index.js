const { Router } = require('express');
const reminderList = require('./reminderList.route');

const routes = Router();

routes.use('/reminders', reminderList);

module.exports = routes;
