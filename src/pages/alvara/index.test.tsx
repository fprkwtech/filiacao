import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import Alvara from '.';

describe('Alvara', () => {
  const cidade = 'Curitiba';
  const data = '10 de setembro de 2022';
  const subject = (
    <Alvara
      host={'localhost:3000'}
      nome={'Filipe'}
      rg={'69885049'}
      estilos={'Shaolin do Norte'}
      y
      cidade={cidade}
      data={data}
      validade={'1 ano'}
    />
  );

  it('renders the name', () => {
    render(subject);

    const nome = screen.getByText('Filipe');

    expect(nome).toBeInTheDocument();
  });

  it('renders the due date', () => {
    render(subject);

    const locationDate = screen.getByText({ cidade } + ', ' + { data });

    expect(locationDate).toBeInTheDocument();
  });

  it('renders the due date', () => {
    render(subject);

    const dueDate = screen.getByText('Validade de 1 ano');

    expect(dueDate).toBeInTheDocument();
  });
});
