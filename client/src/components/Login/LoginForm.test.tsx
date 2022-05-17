import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
  it('has email and password input and login button', () => {
    render(<LoginForm />);

    const emailInput = screen.getByPlaceholderText('이메일');
    const pwInput = screen.getByPlaceholderText('비밀번호');
    const loginBtn = screen.getByRole('button');

    expect(emailInput).toBeInTheDocument();
    expect(pwInput).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });
});
