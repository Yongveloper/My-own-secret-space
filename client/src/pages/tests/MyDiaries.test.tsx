import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import MyDiaries from '../MyDiaries';

describe('<MyDiaries />', () => {
  it('renders diary list and has calendar', () => {
    const history = createMemoryHistory({ initialEntries: ['/mydiaries'] });
    render(
      <Router location={history.location} navigator={history}>
        <MyDiaries />
      </Router>
    );
    const diaryList = screen.getByTestId('DiaryList');
    const calendar = screen.getByRole('textbox');

    expect(diaryList).toBeInTheDocument();
    expect(calendar).toBeInTheDocument();
  });
});
