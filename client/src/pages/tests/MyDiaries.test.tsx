import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyDiaries from '../MyDiaries';

describe('<MyDiaries />', () => {
  it('renders diary list and has calendar', () => {
    render(<MyDiaries />, { wrapper: MemoryRouter });
    const diaryList = screen.getByTestId('DiaryList');
    const calendar = screen.getByRole('textbox');

    expect(diaryList).toBeInTheDocument();
    expect(calendar).toBeInTheDocument();
  });
});
