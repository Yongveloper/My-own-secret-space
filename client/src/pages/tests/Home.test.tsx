import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Home from '../Home';

describe('<Home />', () => {
  it('has two head tags and two buttons.', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    );
    const title = screen.getByRole('heading', { level: 1 });
    const subTitle = screen.getByRole('heading', { level: 2 });
    const buttons = screen.getAllByRole('button');

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
    expect(buttons.length).toBe(2);
  });

  it('click the login button to go to the login path', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    );
    const loginTitle = screen.getByText('로그인');

    expect(history.location.pathname).toBe('/');
    fireEvent.click(loginTitle);
    expect(history.location.pathname).toBe('/login');
  });
});
