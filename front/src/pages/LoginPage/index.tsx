import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { LoginContainer } from './styles';


const LoginPage= () => {
  const [email, setEmail] = useState('');
  const [password, setPaddword] = useState('');
  const [token, setToken] = useState('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaddword(e.target.value);
  };

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      console.log(email, password);
      try {
        const res = await axios.post('/api/login', { email, password });
        console.log(res);
        console.log(res.data.access_token)
        setToken(res.data.access_token);
      } catch (e) {
        console.error(e);
      }
    },
    [email, password],
  );

  const onClickAuth = async () => {
    console.log(token);
    try {
      const res = await axios.get('/api/auth', {headers : {Authorization: `Bearer ${token}`}});
      console.log(res);
    } catch (e) {
      console.error(e)
    }
  }


  return(
    <>
      <LoginContainer>
        <div>로그인</div>

        <form onSubmit={onSubmit}>
          <div>
            <input type="text" value={email} onChange={onChangeEmail} placeholder="이메일" />
          </div>
          <div>
            <input type="password" value={password} onChange={onChangePassword} placeholder="비밀번호" />
          </div>

          <div>
            <button type="submit">로그인</button>
          </div>
        </form>
        <div>
          <button type="button" onClick={onClickAuth}>인증버튼</button>
        </div>
      </LoginContainer>
    </>
  )
}

export default LoginPage;