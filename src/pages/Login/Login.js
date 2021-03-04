import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/Input/Input';
import SubmitGroup from '../../components/SubmitGroup/SubmitGroup';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( !email || !password ) return;
  }

  return (
    <div className="login">
      <header className="login__header">
        <Logo />
      </header>

      <Form name="form-login" title="Рады видеть!" onSubmit={handleSubmit}>
        <Input
          type="email"
          id="email" name="email"
          maxLength="40" minLength="2"
          placeholder="E-mail" required
          errorId="email-error"
          onChange={handleEmailChange}
          value={email}
        >
          E-mail
        </Input>

        <Input
          type="password"
          id="password" name="password"
          maxLength="20" minLength="6"
          placeholder="Пароль" required
          errorId="password-error"
          onChange={handlePasswordChange}
          value={password}
        >
          Пароль
        </Input>

        <SubmitGroup
          submitName="Войти"
          linkName="Регистрация"
          linkDestination="/signup"
        >
          Ещё не зарегистрированы?
        </SubmitGroup>
      </Form>
    </div>
  );
}

export default Login;