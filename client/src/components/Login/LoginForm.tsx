import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginBtn from '../common/Buttons/LoginBtn';

type Inputs = {
  email: string;
  password: string;
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigator = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { email, password } = data;

    axios
      .post('http://localhost:8080/auth/login', {
        email,
        password,
      })
      .then((data) => {
        console.log(data);
        navigator('/mydiaries');
      })
      .catch((error) => alert(error.response.data.message));
  };
  const PW_MESSAGE = '패스워드는 최소 8글자 이상 20자 이하로 입력해주세요.';

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="이메일"
        className="login-input"
        {...register('email', { required: '이메일을 입력해주세요.' })}
      />
      {<span>{errors?.email && errors.email.message}</span>}
      <input
        type="password"
        placeholder="비밀번호"
        className="login-input"
        {...register('password', {
          required: '패스워드를 입력해주세요.',
          minLength: {
            value: 8,
            message: PW_MESSAGE,
          },
          maxLength: {
            value: 20,
            message: PW_MESSAGE,
          },
        })}
      />
      {<span>{errors?.password && errors.password.message}</span>}

      <LoginBtn />
    </form>
  );
}

export default LoginForm;
