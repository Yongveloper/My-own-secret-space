import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Home from '../Home';

describe('<Home />', () => {
  it('has two head tags and two buttons.', () => {
    render(<Home />, { wrapper: MemoryRouter });
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

  it('click the Signup button to go to the Signup path', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    );
    const signupTitle = screen.getByText('가입하기');

    expect(history.location.pathname).toBe('/');
    fireEvent.click(signupTitle);
    expect(history.location.pathname).toBe('/signup');
  });
});
