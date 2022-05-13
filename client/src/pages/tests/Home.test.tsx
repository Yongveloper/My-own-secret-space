import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('<Home />', () => {
  it('has two head tags and two buttons.', () => {
    render(<Home />);
    const title = screen.getByRole('heading', { level: 1 });
    const subTitle = screen.getByRole('heading', { level: 2 });
    const buttons = screen.getAllByRole('button');

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
    expect(buttons.length).toBe(2);
  });
});
