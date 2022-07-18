import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import LoginBtn from '../common/Buttons/LoginBtn';
import { postLogin, ILoginData } from '../../api/auth';
import { userState } from '../../atoms';
import { useSetRecoilState } from 'recoil';

function LoginForm() {
  const setUser = useSetRecoilState(userState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>();

  const navigator = useNavigate();

  const handleLogin = async (info: ILoginData) => {
    try {
      const { token, username, email } = await postLogin(info);
      setUser({ username, email });
      localStorage.setItem('token', token);
      navigator('/mydiaries');
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const onSubmit: SubmitHandler<ILoginData> = (data) => {
    const { email, password } = data;
    handleLogin({ email, password });
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
