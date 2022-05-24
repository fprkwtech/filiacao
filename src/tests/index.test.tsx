import { fireEvent, render, screen } from '@testing-library/react';

import Home from '~/pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    fireEvent.click(screen.getByText('+'));
    const counter = screen.getByText('1');

    expect(counter).toBeInTheDocument();
  });
});
