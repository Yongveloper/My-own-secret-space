import { render, screen } from '@testing-library/react';
import MyDiaryList from '../MyDiaryList';

describe('<MyDiaryList />', () => {
  const sampleDiaries = [
    {
      id: '1',
      title: '의미있는 하루',
      text: '오늘은 의미있는 하루였다. 그런데',
      mood: '😊',
      username: '용용이',
      userId: '1231231',
      imageUrl:
        'https://images.unsplash.com/photo-1652703747774-558a10faacc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
      createAt: new Date(),
    },
    {
      id: '2',
      title: '의미있는 하루2',
      text: '오늘은 의미있는 하루였다. 그런데2',
      mood: '😊',
      username: '용용이2',
      userId: '12312321',
      imageUrl:
        'https://images.unsplash.com/photo-1652703747774-558a10faacc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
      createAt: new Date(),
    },
  ];

  it('renders todos properly', () => {
    render(<MyDiaryList diaries={sampleDiaries} />);

    const text1 = screen.getByText(sampleDiaries[0].text);
    const text2 = screen.getByText(sampleDiaries[1].text);

    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });
});
