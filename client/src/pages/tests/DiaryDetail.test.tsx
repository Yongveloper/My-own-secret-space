import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DiaryDetail from '../DiaryDetail';

describe('<DiaryDetail />', () => {
  it('has title,text,date,mood,image and buttons', () => {
    render(<DiaryDetail />, { wrapper: MemoryRouter });

    const title = screen.getByRole('heading', { level: 1 });
    const text = screen.getByTestId('Text');
    const date = screen.getByTestId('Date');
    const mood = screen.getByTestId('Mood');
    const image = screen.getByTestId('Thumbnail');
    const buttons = screen.getAllByRole('button');

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(mood).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'thumbnail');
    expect(buttons.length).toBe(2);
  });
});
