import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import MyDiaryList from '../components/MyDiaries/MyDiaryList';
import { userState } from '../atoms';
import { getDairies } from '../api/diaries';

function MyDiaries() {
  const user = useRecoilValue(userState);
  const [startDate, setStartDate] = useState(new Date());
  const [diairies, setDiairies] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getDairies(user.username);
      setDiairies(data);
    })();
  }, [user]);

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
      <MyDiaryList diaries={diairies} />
    </div>
  );
}

export default MyDiaries;
