import { fireEvent, render, screen } from '@testing-library/react';

import Counter from '.';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('initial render', () => {
    render(<Counter />);

    const counter = screen.getByText('0');

    expect(counter).toBeInTheDocument();
  });

  describe('when button is clicked once time', () => {
    it('renders a counter equal 1', () => {
      render(<Counter />);

      fireEvent.click(screen.getByText('+'));
      const counter = screen.getByText('1');

      expect(counter).toBeInTheDocument();
    });
  });

  describe('when button is clicked two times', () => {
    it('renders a counter equal 2', () => {
      render(<Counter />);

      fireEvent.click(screen.getByText('+'));
      fireEvent.click(screen.getByText('+'));

      const counter = screen.getByText('2');

      expect(counter).toBeInTheDocument();
    });
  });
});
