const { ReminderList } = require('../database/models');
const moment = require('moment');
const { formatAndValidateDate } = require('../utils/dateFormat');

const createReminderList = async ({ name, date }) => {
	const now = moment().format('DD/MM/YYYY');

	const formattedDate = formatAndValidateDate(date);

	if (typeof name !== 'string') {
		throw new Error('O nome do lembrete deve ser uma string');
	}

	if (name === '' || date === '') {
		throw new Error('Os campos name e date são obrigatórios');
	}

	//se a data for menor ou igual ao dia de hoje retorna um erro
	if (date <= now) {
		throw new Error('O lembrete deve ser em uma data no futuro');
	}

	const newReminder = await ReminderList.create({ name, date: formattedDate });

	return newReminder;
};

const getReminders = async ({ date }) => {
	const formattedDate = formatAndValidateDate(date);
    
	const reminders = await ReminderList.findAll({
		where: { date: formattedDate },
	});

	if (reminders.length === 0) {
		throw new Error('Nenhum lembrete encontrado');
	}


	return reminders;
};

const getAllReminders = async() => {
    const reminders = await ReminderList.findAll(); 
    
    if (reminders.length === 0) {
        throw new Error('Nenhum lembrete encontrado');
    };

    return reminders;
}

const deleteReminder = async (id) => {
	const reminder = await ReminderList.destroy({ where: { id } });

	if (!id) {
		throw new Error('Lembrete não existente');
	}

	return reminder;
};

module.exports = {
	createReminderList,
	getReminders,
	deleteReminder,
    getAllReminders
};
