import React, { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import Logo from '../components/Logo/Logo';
import Input from '../components/Input/Input';
import SubmitGroup from '../components/SubmitGroup/SubmitGroup';
import { useFormWithValidation } from '../hooks/useFormWithValidation';
import './Login/Login.css';

function Register(props) {
  const {
    values, handleChange, handleInput, errors, isValid, resetForm
  } = useFormWithValidation();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage('');
  }, []);

  const emptyForm = () => {
    resetForm({ name: '', email: '', password: '' }, {}, false);
    setErrorMessage('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onRegister(values.email, values.password, values.name, emptyForm);
    setErrorMessage(props.errorMessage);
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
          pattern="^[A-Za-z]([A-Za-z]| |-){1,28}[A-Za-z]$"
          errorId="name-error"
          isError={errors.name} errorText={errors.name}
          onChange={handleChange} onInput={handleInput}
          value={values.name || ''}
        >
          Имя
        </Input>
        <Input
          type="email"
          id="email" name="email"
          placeholder="E-mail" required
          errorId="email-error"
          isError={errors.email} errorText={errors.email}
          onChange={handleChange} onInput={handleInput}
          value={values.email || ''}
        >
          E-mail
        </Input>

        <Input
          type="password"
          id="password" name="password"
          maxLength="20" minLength="8"
          placeholder="Пароль" required
          errorId="password-error"
          isError={errors.password} errorText={errors.password}
          onChange={handleChange} onInput={handleInput}
          value={values.password || ''}
        >
          Пароль
        </Input>

        <SubmitGroup
          submitName="Зарегистрироваться"
          linkName="Войти"
          linkDestination="/signin"
          submitDisabled={!isValid}
          errorMessage={errorMessage}
        >
          Уже зарегистрированы?
        </SubmitGroup>
      </Form>
    </div>
  );
}

export default Register;
