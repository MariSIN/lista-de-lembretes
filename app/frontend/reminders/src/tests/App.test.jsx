import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonPostReminder from '../components/input-form/ButtonPostReminder';
import InputsReminder from '../components/input-form/InputsReminder';
import ContextProvider from '../context/ContextProvider';

describe('Testa componente InputsReminder', () => {
	it('Testa se inputs Nome e Data existem', () => {
		render(
			<ContextProvider>
				<InputsReminder />
			</ContextProvider>,
		);
		expect(screen.getByPlaceholderText('Nome do lembrete')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('DD/MM/YYYY')).toBeInTheDocument();
	});

	describe('Testa se é possível escrever no input...', () => {
		it('Name', () => {
			render(
				<ContextProvider>
					<InputsReminder />
				</ContextProvider>,
			);
			const inputName = screen.getByPlaceholderText('Nome do lembrete');
			userEvent.type(inputName, 'Lembrete 1');
		});

		it('Date', () => {
			render(
				<ContextProvider>
					<InputsReminder />
				</ContextProvider>,
			);
			const inputDate = screen.getByPlaceholderText('DD/MM/YYYY');
			userEvent.type(inputDate, '20/10/2023');
		});
	});

	describe('Testa se o estado é atualizado', () => {
		it('Name', () => {
			const { container } = render(
				<ContextProvider>
					<InputsReminder />
				</ContextProvider>,
			);
			const inputName = screen.getByPlaceholderText('Nome do lembrete');
			userEvent.type(inputName, 'Novo Nome');

			expect(container).toMatchSnapshot();
		});

		it('Date', () => {
			const { container } = render(
				<ContextProvider>
					<InputsReminder />
				</ContextProvider>,
			);
			const inputDate = screen.getByPlaceholderText('DD/MM/YYYY');
			userEvent.type(inputDate, '20/10/2023');

			expect(container).toMatchSnapshot();
		});
	});
});

describe('Testa componente ButtonPostReminder', () => {
	it('Testa se o botão criar existe', () => {
		render(
			<ContextProvider>
				<ButtonPostReminder />
			</ContextProvider>,
		);
		const button = screen.getByText('CRIAR');
		expect(button).toBeInTheDocument();
	});
});
