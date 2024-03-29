import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useQuery } from 'react-query';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import MyDiaryList from '../components/MyDiaries/MyDiaryList';
import { userState } from '../atoms';
import { getDairies } from '../api/diaries';

export interface IMyDiaryItem {
  id: string;
  title: string;
  text: string;
  mood: string;
  username: string;
  userId: string;
  imageUrl: string;
  createdAt: Date;
}

function MyDiaries() {
  const user = useRecoilValue(userState);
  const [startDate, setStartDate] = useState(new Date());
  const [filterdDiary, setFilterdDiary] = useState<IMyDiaryItem[] | undefined>(
    []
  );
  const {
    isLoading,
    error,
    data: diaries,
  } = useQuery<IMyDiaryItem[]>('myDiaries', () => getDairies(user.username));

  const handleDateFilter = () => {
    const filterdDiary = diaries?.filter((diary) => {
      const diaryDate = new Date(diary.createdAt);
      const year = diaryDate.getFullYear();
      const month = diaryDate.getMonth();
      if (year === startDate.getFullYear() && month === startDate.getMonth()) {
        return true;
      } else {
        return false;
      }
    });

    setFilterdDiary(filterdDiary);
  };

  useEffect(() => {
    handleDateFilter();
  }, [startDate, diaries]);

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
      <MyDiaryList diaries={filterdDiary} />
    </div>
  );
}

export default MyDiaries;
