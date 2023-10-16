import { useContext } from 'react';
import InputMask from 'react-input-mask';
import Context from '../../context/Context';
import '../../style/inputsReminder.css';
import ButtonPostReminder from './ButtonPostReminder';

export default function InputsReminder() {
	const { nameDate, setDateName } = useContext(Context);
	const handleChange = ({ target }) => {
		const { name, value } = target;

		setDateName({
			...nameDate,
			[name]: value,
		});
	};

	return (
		<form className='form-container'>
			<h1>Novo Lembrete</h1>
			<div className='input-label-container'>
				<div className='input-label'>
					<label htmlFor='name-box'>Nome</label>
					<input
						id='name-box'
						type='text'
						name='name'
						value={nameDate.name}
						onChange={handleChange}
						placeholder='Nome do lembrete'
						required
					/>
				</div>
				<div className='input-label'>
					<label htmlFor='date-box'>Data</label>
					<InputMask
						id='date-box'
						mask='99/99/9999'
						placeholder='DD/MM/YYYY'
						name='date'
						value={nameDate.date}
						onChange={handleChange}
						required
					/>
				</div>
			</div>

			<ButtonPostReminder />
		</form>
	);
}
