import { render, screen } from '@testing-library/react';
import Login from '../Login';

describe('<Login />', () => {
  describe('default field must be rendered', () => {
    it('has title, inputs, two span and three buttons.', () => {
      render(<Login />);
      const title = screen.getByRole('heading', { level: 1 });
      const emailInput = screen.getByPlaceholderText('이메일');
      const pwInput = screen.getByPlaceholderText('비밀번호');
      const span1 = screen.getByText('아직 계정이 없으신가요? 계정 만들기');
      const span2 = screen.getByText('또는');
      const buttons = screen.getAllByRole('button');

      expect(title).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(pwInput).toBeInTheDocument();
      expect(span1).toBeInTheDocument();
      expect(span2).toBeInTheDocument();
      expect(buttons.length).toBe(3);
    });
  });
});
