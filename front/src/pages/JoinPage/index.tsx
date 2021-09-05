import React, { ReactHTMLElement, useState } from 'react';

const JoinPage = () => {
  const [email, setEmail] = useState('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div>회원가입</div>

      <form>
        <input type="text" value={email} onChange={onChangeEmail} />
      </form>
    </>
  );
};

export default JoinPage;
