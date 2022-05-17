import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import LoginSignupText from './LoginSignupText';

describe('<LoginSignupText />', () => {
  it('when it is a login route, it shows you to signup text', () => {
    const history = createMemoryHistory({ initialEntries: ['/login'] });
    render(
      <Router location={history.location} navigator={history}>
        <LoginSignupText />
      </Router>
    );

    const signupText = screen.getByText('아직 계정이 없으신가요?');
    const signupLink = screen.getByText('계정 만들기');

    expect(signupText).toBeInTheDocument();
    expect(signupLink).toBeInTheDocument();
  });

  it('when it is a signup route, it shows you to login text', () => {
    const history = createMemoryHistory({ initialEntries: ['/signup'] });
    render(
      <Router location={history.location} navigator={history}>
        <LoginSignupText />
      </Router>
    );

    const loginText = screen.getByText('이미 계정이 있으신가요?');
    const loginLink = screen.getByText('로그인');

    expect(loginText).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });
});
