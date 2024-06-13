import React, { useRef, useState } from "react";
import { Button, Container, FormControl, FormGroup, FormHelperText, Input, InputLabel, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from './LogIn.module.css'; // Импорт стилей

function LogIn() {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const passwordConfirmationRef = useRef<HTMLInputElement>();

  const [errors, setErrors] = useState<string[]>([]);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors([]);
    
    if (
      !emailRef.current?.value ||
      !passwordRef.current?.value ||
      (showSignUp && !passwordConfirmationRef.current?.value)
    ) {
      setErrors(["Please fill out all fields"]);
      return;
    }

    // Если все в порядке, можно отправить данные на сервер или выполнить другие действия
    // dispatch(loginUser({ email: emailRef.current.value, password: passwordRef.current.value }));
  }

  async function handleSignUp(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setShowSignUp(true);
  }

  return (
    <Container className={styles.container}>
      <Typography variant="h4" gutterBottom className={styles.header}>
        {showSignUp ? "Sign Up" : "Log In"}
      </Typography>
      {errors.length > 0 && (
        <div className={styles.error_message}>
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      {showSignUp ? (
        <form onSubmit={handleSubmit}>
          <FormGroup className={styles.form_group}>
            <FormControl fullWidth>
              <InputLabel required htmlFor="email" className={styles.inputLabel}>
                Email Address
              </InputLabel>
              <Input id="email" type="email" inputRef={emailRef} />
              <FormHelperText className={styles.helperText}>We'll never share your email.</FormHelperText>
            </FormControl>
          </FormGroup>
          <FormGroup className={styles.form_group}>
            <FormControl fullWidth>
              <InputLabel required htmlFor="password" className={styles.inputLabel}>
                Password
              </InputLabel>
              <Input id="password" type="password" inputRef={passwordRef} />
              <FormHelperText className={styles.helperText}>We'll never share your password.</FormHelperText>
            </FormControl>
          </FormGroup>
          <FormGroup className={styles.form_group}>
            <FormControl fullWidth>
              <InputLabel required htmlFor="password-confirmation" className={styles.inputLabel}>
                Password Confirmation
              </InputLabel>
              <Input id="password-confirmation" type="password" inputRef={passwordConfirmationRef} />
            </FormControl>
          </FormGroup>
          <Button variant="contained" color="primary" type="submit">
            Sign Up
          </Button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <FormGroup className={styles.form_group}>
            <FormControl fullWidth>
              <InputLabel required htmlFor="email" className={styles.inputLabel}>
                Email Address
              </InputLabel>
              <Input id="email" type="email" inputRef={emailRef} />
              <FormHelperText className={styles.helperText}>We'll never share your email.</FormHelperText>
            </FormControl>
          </FormGroup>
          <FormGroup className={styles.form_group}>
            <FormControl fullWidth>
              <InputLabel required htmlFor="password" className={styles.inputLabel}>
                Password
              </InputLabel>
              <Input id="password" type="password" inputRef={passwordRef} />
              <FormHelperText className={styles.helperText}>We'll never share your password.</FormHelperText>
            </FormControl>
          </FormGroup>
          <Button variant="contained" color="primary" type="submit">
            Log In
          </Button>
        </form>
      )}
      <Typography variant="body1" className={styles.toggleLink}>
        {showSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <Link to="#" onClick={showSignUp ? () => setShowSignUp(false) : handleSignUp}>
          {showSignUp ? "Log In" : "Sign Up"}
        </Link>
      </Typography>
    </Container>
  );
}

export default LogIn;
