import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignupBtn from '../common/Buttons/SignupBtn';

type Inputs = {
  username: string;
  email: string;
  password: string;
  checkPassword: string;
};

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigator = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { username, email, password, checkPassword } = data;

    if (password !== checkPassword) {
      return alert('비밀번호가 서로 다릅니다.');
    }

    axios
      .post('http://localhost:8080/auth/signup', {
        username,
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
  const registerOptions = {
    username: {
      required: '공백 없이 이름을 입력해주세요.',
      pattern: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/,
    },
    email: { required: '이메일을 입력해주세요.' },
    password: {
      required: '패스워드를 입력해주세요.',
      minLength: {
        value: 8,
        message: PW_MESSAGE,
      },
      maxLength: {
        value: 20,
        message: PW_MESSAGE,
      },
    },
    checkPassword: {
      required: '패스워드를 입력해주세요.',
      minLength: {
        value: 8,
        message: PW_MESSAGE,
      },
      maxLength: {
        value: 20,
        message: PW_MESSAGE,
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="이름"
        className="login-input"
        {...register('username', registerOptions.username)}
      />
      {<span>{errors?.username && errors.username.message}</span>}
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
