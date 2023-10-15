import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import getAxios from '../../services/getAxios';

export default function ListAllReminders() {
    const { allReminders, setAllReminders } = useContext(Context);
    const [groupedReminders, setGroupedReminders] = useState({});

	const formatDate = (dateString) => {
		const formattedDate = moment(dateString, 'YYYY-MM-DD').format('DD/MM/YYYY');
		return formattedDate;
	}

	useEffect(() => {
    const fetchReminders = async () => {
      try {
        const reminders = await getAxios('/reminders');
        setAllReminders(reminders);
        const remindersGrouped = groupRemindersByDate(reminders);
        setGroupedReminders(remindersGrouped);
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
        return groupedReminders;
      };
    fetchReminders();
  }, [setAllReminders, allReminders]);

return (
    <div>
        {Object.keys(groupedReminders).map((date) => (
            <div key={date}>
                <p>{date}</p>
                <ul>    
                    {groupedReminders[date].map((e) => (
                        <li key={e.id}>{e.name}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);



}
