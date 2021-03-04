import React, { useState } from 'react';
import Form from '../components/Form/Form';
import Logo from '../components/Logo/Logo';
import Input from '../components/Input/Input';
import SubmitGroup from '../components/SubmitGroup/SubmitGroup';
import './Login/Login.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if ( !email || !password ) return;
  };

  return (
    <div className="login">
      <header className="login__header">
        <Logo />
      </header>

      <Form name="form-register" title="Добро пожаловать!" onSubmit={handleSubmit}>
        <Input
          type="text"
          id="name" name="name"
          maxLength="30" minLength="2"
          placeholder="Имя" required
          errorId="name-error"
          onChange={handleNameChange}
          value={name}
        >
          Имя
        </Input>
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
          submitName="Зарегистрироваться"
          linkName="Войти"
          linkDestination="/signin"
        >
          Уже зарегистрированы?
        </SubmitGroup>
      </Form>
    </div>
  );
}

export default Register;
