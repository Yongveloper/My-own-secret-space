import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Signup from '../Signup';

describe('<Login />', () => {
  describe('default field must be rendered', () => {
    it('has title, inputs, link tag, two span and three buttons.', () => {
      const history = createMemoryHistory({ initialEntries: ['/signup'] });
      render(
        <Router location={history.location} navigator={history}>
          <Signup />
        </Router>
      );
      const title = screen.getByRole('heading', { level: 1 });
      const span1 = screen.getByText('이미 계정이 있으신가요?');
      const span2 = screen.getByText('또는');
      const loginLink = screen.getByText('로그인');
      const buttons = screen.getAllByRole('button');

      expect(title).toBeInTheDocument();
      expect(span1).toBeInTheDocument();
      expect(loginLink).toBeInTheDocument();
      expect(span2).toBeInTheDocument();
      expect(buttons.length).toBe(3);
    });
  });
});
