const { ReminderList } = require('../database/models');
const moment = require('moment');
const { formatAndValidateDate } = require('../utils/dateFormat');

const createReminderList = async ({ name, date }) => {
	const formattedDate = formatAndValidateDate(date);
  
	if (typeof name !== 'string') {
	  throw new Error('O nome do lembrete deve ser uma string');
	}
  
	if (name === '' || date === '') {
	  throw new Error('Os campos name e date são obrigatórios');
	}
  
	const currentDate = new Date(); // Data atual
	const selectedDate = new Date(formattedDate); // Data fornecida no formato correto
  
	if (selectedDate <= currentDate) {
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
