import { useContext } from 'react';
import Context from '../../context/Context';
import postAxios from '../../services/postAxios';

export default function ButtonPostReminder() {
	const { nameDate, setDateName } = useContext(Context);

	const createReminder = async () => {
		const dataRegex =
			/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
		if (!dataRegex.test(nameDate.date)) {
			alert('A data deve estar no formato DD/MM/YYYY');
			return;
		}

		try {
			const reminder = await postAxios('/reminders', nameDate);
			console.log(reminder);

			if (reminder.status === 400) {
				('Erro: Dados em formato errado.');
			}

			setDateName({
				name: '',
				date: '',
			});

			return reminder;
		} catch (error) {
			console.error('Erro ao enviar dados:', error.message);
		}
	};

	return (
		<button
			type='button'
			onClick={createReminder}>
			Confirma
		</button>
	);
}
