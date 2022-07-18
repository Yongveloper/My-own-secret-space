import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Footer from './Footer';

describe('<Footer />', () => {
  it('show the footer menu when logged in', () => {
    const history = createMemoryHistory({ initialEntries: ['/mydiaries'] });
    render(
      <Router location={history.location} navigator={history}>
        <Footer />
      </Router>
    );

    const myDiaryLink = screen.getByText('나의 일기');
    const writeDiaryLink = screen.getByText('일기 쓰기');
    const infoLink = screen.getByText('로그아웃');

    expect(myDiaryLink).toBeInTheDocument();
    expect(writeDiaryLink).toBeInTheDocument();
    expect(infoLink).toBeInTheDocument();
  });
});
