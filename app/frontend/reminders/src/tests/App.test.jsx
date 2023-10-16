import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputsReminder from '../components/input-form/InputsReminder';
import ContextProvider from '../context/ContextProvider';

describe('Testa componente InputsReminder', () => {
  it('Testa se inputs Nome e Data existem', () => {
    render(
      <ContextProvider >
        <InputsReminder />
      </ContextProvider>
    )
    expect(screen.getByPlaceholderText('Nome do lembrete')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('DD/MM/YYYY')).toBeInTheDocument();
  });

  it('Testa se é possível escrever nos inputs', () => {
    render(
      <ContextProvider >
        <InputsReminder />
      </ContextProvider>
    )
    const inputName = screen.getByPlaceholderText('Nome do lembrete');
    const inputDate = screen.getByPlaceholderText('DD/MM/YYYY');
    userEvent.type(inputName, 'Lembrete 1');
    userEvent.type(inputDate, '20/10/2023');
  });
  it('Testa se o estado name é atualizado corretamente', () => {
    const { container } = render(
      <ContextProvider>
        <InputsReminder />
      </ContextProvider>
    );
    const inputName = screen.getByPlaceholderText('Nome do lembrete');
    userEvent.type(inputName, 'Novo Nome');

    const inputDate = screen.getByPlaceholderText('DD/MM/YYYY');
    userEvent.type(inputDate, '20/10/2023');

    expect(container).toMatchSnapshot();
  });
  
  
});
