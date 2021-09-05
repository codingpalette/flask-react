import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { JoinContainer } from './styles';

const JoinPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPaddword] = useState('');

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
        const res = await axios.post('/test', { email, password });
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    },
    [email, password],
  );

  return (
    <>
      <JoinContainer>
        <div>회원가입</div>

        <form onSubmit={onSubmit}>
          <div>
            <input type="text" value={email} onChange={onChangeEmail} placeholder="이메일" />
          </div>
          <div>
            <input type="password" value={password} onChange={onChangePassword} placeholder="비밀번호" />
          </div>

          <div>
            <button type="submit">가입하기</button>
          </div>
        </form>
      </JoinContainer>
    </>
  );
};

export default JoinPage;
