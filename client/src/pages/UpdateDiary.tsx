import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getDiaryDetail, IDiaryData, putUpdateDiary } from '../api/diaries';

function UpdateDiary() {
  const { id } = useParams();
  const navigator = useNavigate();
  const {
    isLoading,
    error,
    data: diary,
  } = useQuery<IDiaryData>(['diary', id], () => getDiaryDetail(id as string));

  const { reset, register, handleSubmit } = useForm<IDiaryData>();

  const onSubmit: SubmitHandler<IDiaryData> = async (diary) => {
    await putUpdateDiary(id as string, diary);
    navigator('/mydiaries');
  };

  useEffect(() => {
    reset({ ...diary });
  }, [diary, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="content-wrap">
      <label className="mb-2">오늘의 기분</label>
      <select
        className="form-select appearance-none
      block
      w-100
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
        {...register('mood')}
      >
        😀
        <option value="😢">😢</option>
        <option value="😡">😡</option>
        <option value="🤣">🤣</option>
        <option value="😱">😱</option>
      </select>

      <div className="flex justify-center items-center w-full my-3">
        <label className="flex flex-col justify-center items-center w-full h-48 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col justify-center items-center pt-5 pb-6">
            <svg
              className="mb-3 w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">사진을 업로드 하세요</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            {...register('imageUrl')}
          />
        </label>
      </div>

      <div className="w-full">
        <div className="flex justify-center">
          <div className="mb-3 w-full ">
            <label className="form-label inline-block mb-2">제목</label>
            <input
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlInput1"
              placeholder="제목을 입력해주세요."
              {...register('title', { required: '제목을 입력해주세요.' })}
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-center w-full">
          <div className="mb-3 w-full">
            <label className="form-label inline-block mb-2 ">내용</label>
            <textarea
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea1"
              rows={3}
              placeholder="내용을 입력해주세요."
              {...register('text', {
                required: '내용을 입력해주세요.',
                minLength: {
                  value: 10,
                  message: '내용은 최소 10 글자 이상입니다.',
                },
              })}
            />
          </div>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full mt-3">
        작성 완료
      </button>
    </form>
  );
}

export default UpdateDiary;
