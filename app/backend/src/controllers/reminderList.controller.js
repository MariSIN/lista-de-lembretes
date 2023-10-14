const errorHandler = require('../middlewares/errorHandler');
const { createReminderList, getReminders, deleteReminder, getAllReminders } = require('../services/reminderList.service');
const { CREATED, BAD_REQUEST, OK, NOT_FOUND } = require('../utils/httpStatusCode');

const addReminderList = async (req, res, next) => {
	const { name, date } = req.body;

	try {
		const reminder = await createReminderList({ name, date });

		return res.status(CREATED).json(reminder);
	} catch (error) {
		if (error.message) {
            res.status(BAD_REQUEST).json({ message: error.message })
        }
		errorHandler(error, req, res, next);
	}
};

const findReminders = async (req, res, next) => {
    const { date } = req.query

    try {
        if (date) {
            const reminders = await getReminders({ date });
            return res.status(OK).json(reminders);
        } else {
            const reminders = await getAllReminders();
            return res.status(OK).json(reminders);
        }
    } catch (error) {
        if (error.message) {
            res.status(NOT_FOUND).json({ message: error.message });
        }
        errorHandler(error, req, res, next);
    }
};

const destroyReminder = async (req, res, next) => {
    const { id } = req.params

    try {
        await deleteReminder(id);
        return res.status(OK).json({ message: 'Lembrete deletado com sucesso' });
    } catch (error) {
        if (error.message) {
            res.status(NOT_FOUND).json({ message: error.message });
        }
        errorHandler(error, req, res, next);
    }
};

module.exports = {
	addReminderList,
    findReminders,
    destroyReminder,
};
