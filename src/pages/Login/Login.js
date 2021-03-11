import React, { useEffect, useState } from 'react';
import Form from '../../components/Form/Form';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/Input/Input';
import SubmitGroup from '../../components/SubmitGroup/SubmitGroup';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import './Login.css';

function Login(props) {
  const {
    values, handleChange, handleInput, errors, isValid, resetForm
  } = useFormWithValidation();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage('');
  }, []);

  const emptyForm = () => {
    resetForm({ email: '', password: '' }, {}, false);
    setErrorMessage('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(values.email, values.password, emptyForm);
    setErrorMessage(props.errorMessage);
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
          maxLength="20" minLength="6"
          placeholder="Пароль" required
          errorId="password-error"
          isError={errors.password} errorText={errors.password}
          onChange={handleChange} onInput={handleInput}
          value={values.password || ''}
        >
          Пароль
        </Input>

        <SubmitGroup
          submitName="Войти"
          linkName="Регистрация"
          linkDestination="/signup"
          submitDisabled={!isValid}
          errorMessage={errorMessage}
        >
          Ещё не зарегистрированы?
        </SubmitGroup>
      </Form>
    </div>
  );
}

export default Login;