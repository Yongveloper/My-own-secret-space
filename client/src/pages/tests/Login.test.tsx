import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Login from '../Login';

describe('<Login />', () => {
  describe('default field must be rendered', () => {
    it('has title, inputs, two span and three buttons.', () => {
      // Todo: 계정만들기 링크태그 테스트 포함 및 개선
      const history = createMemoryHistory({ initialEntries: ['/login'] });
      render(
        <Router location={history.location} navigator={history}>
          <Login />
        </Router>
      );
      const title = screen.getByRole('heading', { level: 1 });
      const span1 = screen.getByText('아직 계정이 없으신가요?');
      const span2 = screen.getByText('또는');
      const signupLink = screen.getByText('계정 만들기');
      const buttons = screen.getAllByRole('button');

      expect(title).toBeInTheDocument();
      expect(span1).toBeInTheDocument();
      expect(span2).toBeInTheDocument();
      expect(signupLink).toBeInTheDocument();
      expect(buttons.length).toBe(3);
    });
  });
});
