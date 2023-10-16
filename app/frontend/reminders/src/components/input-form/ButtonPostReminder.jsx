import { useContext } from 'react';
import Context from '../../context/Context';
import postAxios from '../../services/postAxios';

export default function ButtonPostReminder() {
	const { nameDate, setDateName } = useContext(Context);
	const { allReminders, setAllReminders } = useContext(Context);

	const createReminder = async () => {
		const dataRegex =
			/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

		try {
			const reminder = await postAxios('/reminders', nameDate);

			if (reminder.status === 400) {
				if (!nameDate.name) {
					alert('O lembrete deve ter um nome');
				}

				if (!nameDate.date) {
					alert('O lembrete deve ter uma data');

				} else if (!dataRegex.test(nameDate.date)) {
					alert('A data deve estar no formato DD/MM/YYYY');
					return;
					
				} else {
					alert('A data deve estar no futuro');
				}
			} else {
				setDateName({
					name: '',
					date: '',
				});

				setAllReminders([...allReminders, reminder]);

				return reminder;
			}
		} catch (error) {
			console.error('Erro ao enviar dados:', error.message);
		}
	};

	return (
		<button
			type='button'
			onClick={createReminder}>
			CRIAR
		</button>
	);
}
