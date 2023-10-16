import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import deleteAxios from '../../services/deleteAxios';
import getAxios from '../../services/getAxios';

export default function ListAllReminders() {
	const { allReminders, setAllReminders } = useContext(Context);
	const [groupedReminders, setGroupedReminders] = useState({});

	const formatDate = (dateString) => {
		const formattedDate = moment(dateString, 'YYYY-MM-DD').format('DD/MM/YYYY');
		return formattedDate;
	};

	const deleteReminders = async (id) => {
		try {
			await deleteAxios('/reminders', id);
			setAllReminders(allReminders.filter((reminder) => reminder.id !== id));

			// Atualiza groupedReminders após a exclusão
			const updatedGroupedReminders = { ...groupedReminders };
			for (const date in updatedGroupedReminders) {
				updatedGroupedReminders[date] = updatedGroupedReminders[date].filter(
					(e) => e.id !== id,
				);
				if (updatedGroupedReminders[date].length === 0) {
					delete updatedGroupedReminders[date];
				}
			}
			setGroupedReminders(updatedGroupedReminders);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		const fetchReminders = async () => {
			try {
				const reminders = await getAxios('/reminders');
				if (Array.isArray(reminders)) {
					setAllReminders(
						reminders.sort((a, b) => {
							//ordena por data
							if (a.date > b.date || null) {
								return 1;
							}
							if (a.date < b.date) {
								return -1;
							}
							return 0;
						}),
					);
					const remindersGrouped = groupRemindersByDate(reminders);
					setGroupedReminders(remindersGrouped);
				}
			} catch (error) {
				console.error('Erro ao buscar serviços:', error);
			}
		};
		const groupRemindersByDate = (reminders) => {
			const groupedReminders = {};
			for (const reminder of reminders) {
				const formattedDate = formatDate(reminder.date);
				groupedReminders[formattedDate]
					? groupedReminders[formattedDate].push(reminder)
					: (groupedReminders[formattedDate] = [reminder]);
			}
			//console.log(groupedReminders);
			return groupedReminders;
		};
		fetchReminders();
	}, [setAllReminders, allReminders]);

	return (
		<div>
			<h2>Lista de lembretes</h2>
			{Object.keys(groupedReminders).map((date) => (
				<div key={date}>
					<p>{date}</p>
					<ul>
						{groupedReminders[date].map((e) => (
							<li key={e.id}>
								{e.name}
								<button
									type='button'
									onClick={() => deleteReminders(e.id)}>
									x
								</button>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}
