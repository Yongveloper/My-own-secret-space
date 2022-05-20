import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyDiaryItem from '../MyDiaryItem';

describe('<MyDiaryItem />', () => {
  const sampleDiary = {
    id: '1',
    title: '의미있는 하루',
    text: '오늘은 의미있는 하루였다. 그런데',
    mood: '😊',
    username: '용용이',
    userId: '1231231',
    imageUrl:
      'https://images.unsplash.com/photo-1652703747774-558a10faacc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    createAt: new Date(),
  };

  it('has title, text,mood and image', () => {
    render(<MyDiaryItem {...sampleDiary} />, { wrapper: MemoryRouter });
    const title = screen.getByRole('heading', { level: 1 });
    const text = screen.getByText('오늘은 의미있는 하루였다. 그런데');
    const date = screen.getByTestId('Date');
    const mood = screen.getByText('😊');
    const image = screen.getByTestId('Thumbnail');

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(mood).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'thumbnail');
  });
});
