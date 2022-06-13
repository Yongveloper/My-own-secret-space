import { useForm, SubmitHandler } from 'react-hook-form';
import SignupBtn from '../common/Buttons/SignupBtn';

type Inputs = {
  name: string;
  email: string;
  password: string;
  checkPassword: string;
};

function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const registerOptions = {
    name: {
      required: '공백 없이 이름을 입력해주세요.',
      pattern: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/,
    },
    email: { required: '이메일을 입력해주세요.' },
    password: {
      required: '패스워드를 입력해주세요.',
      minLength: {
        value: 8,
        message: '패스워드는 최소 8글자 이상 20자 이하로 입력해주세요.',
      },
      maxLength: {
        value: 20,
        message: '패스워드는 최소 8글자 이상 20자 이하로 입력해주세요.',
      },
    },
    checkPassword: {
      required: '패스워드를 입력해주세요.',
      minLength: {
        value: 8,
        message: '패스워드는 최소 8글자 이상 20자 이하로 입력해주세요.',
      },
      maxLength: {
        value: 20,
        message: '패스워드는 최소 8글자 이상 20자 이하로 입력해주세요.',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="이름"
        className="login-input"
        {...register('name', registerOptions.name)}
      />
      {<span>{errors?.name && errors.name.message}</span>}
      <input
        type="email"
        placeholder="이메일"
        className="login-input"
        {...register('email', registerOptions.email)}
      />
      {<span>{errors?.email && errors.email.message}</span>}

      <input
        type="password"
        placeholder="비밀번호"
        className="login-input"
        {...register('password', registerOptions.password)}
      />
      {<span>{errors?.password && errors.password.message}</span>}
      <input
        type="password"
        placeholder="비밀번호 확인"
        className="login-input"
        {...register('checkPassword', registerOptions.checkPassword)}
      />
      {<span>{errors?.checkPassword && errors.checkPassword.message}</span>}
      <SignupBtn />
    </form>
  );
}

export default SignupForm;
