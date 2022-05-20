import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import MyDiaryList from '../components/MyDiaries/MyDiaryList';

const tempDiary = [
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
    title: '의미있는 하루',
    text: '오늘은 의미있는 하루였다. 그런데',
    mood: '😊',
    username: '용용이',
    userId: '1231231',
    imageUrl: '',
    createAt: new Date(),
  },
  {
    id: '3',
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
    id: '4',
    title: '의미있는 하루',
    text: '오늘은 의미있는 하루였다. 그런데',
    mood: '😡',
    username: '용용이',
    userId: '1231231',
    imageUrl:
      'https://images.unsplash.com/photo-1652703747774-558a10faacc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    createAt: new Date(),
  },
];

function MyDiaries() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="content-wrap text-center">
      <DatePicker
        className="p-1 rounded text-neutral-500 text-center"
        selected={startDate}
        locale={ko}
        dateFormat="yyyy년 MM월"
        showMonthYearPicker
        maxDate={new Date()}
        onChange={(date: Date) => setStartDate(date)}
      />
      <MyDiaryList diaries={tempDiary} />
    </div>
  );
}

export default MyDiaries;
