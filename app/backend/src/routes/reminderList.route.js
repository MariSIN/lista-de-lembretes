const { Router } = require('express');
const { addReminderList, findReminders, destroyReminder, findAllReminders } = require('../controllers/reminderList.controller');

const route = Router();

route.post('/', addReminderList);
route.get('/', findReminders);
route.delete('/:id', destroyReminder);

module.exports = route;
