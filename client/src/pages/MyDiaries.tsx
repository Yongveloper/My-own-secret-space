import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import MyDiaryList from '../components/MyDiaries/MyDiaryList';
import { userState } from '../atoms';
import { getDairies } from '../api/diaries';
import { useQuery } from 'react-query';

function MyDiaries() {
  const user = useRecoilValue(userState);
  const [startDate, setStartDate] = useState(new Date());
  const {
    isLoading,
    error,
    data: diaries,
  } = useQuery('myDiaries', () => getDairies(user.username));

  if (isLoading) {
    return <div>일기를 불러오는 중입니다...</div>;
  }

  if (error) {
    return <div>일기를 불러올 수 없습니다.</div>;
  }

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
      <MyDiaryList diaries={diaries} />
    </div>
  );
}

export default MyDiaries;
