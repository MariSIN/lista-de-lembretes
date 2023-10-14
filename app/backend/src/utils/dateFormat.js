const moment = require('moment');

const formatAndValidateDate = (date) => {
    const parsedDate = moment(date, 'DD/MM/YYYY', true);

    if (!date) {
        throw new Error('O campo date é obrigatório');
    }
    // Checa se 'date' está no formato 'DD/MM/YYYY' e converte para 'YYYY-MM-DD'
    if (!parsedDate.isValid()) {
        throw new Error('A data deve estar no formato DD/MM/YYYY')
    }

    return parsedDate.format('YYYY-MM-DD');

};

module.exports = {
    formatAndValidateDate
}