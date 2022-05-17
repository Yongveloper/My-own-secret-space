import { render, screen } from '@testing-library/react';
import SignupForm from './SignupForm';

describe('<SignupForm />', () => {
  it('has signup inputs and login button', () => {
    render(<SignupForm />);

    const nameInput = screen.getByPlaceholderText('이름');
    const emailInput = screen.getByPlaceholderText('이메일');
    const pwInput = screen.getByPlaceholderText('비밀번호');
    const checkPwInput = screen.getByPlaceholderText('비밀번호 확인');
    const signupBtn = screen.getByRole('button');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(checkPwInput).toBeInTheDocument();
    expect(pwInput).toBeInTheDocument();
    expect(signupBtn).toBeInTheDocument();
  });
});
