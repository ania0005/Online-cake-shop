import React, { useRef, useState } from "react";
import { Button, Container, FormControl, FormGroup, FormHelperText, Input, InputLabel, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function LogIn() {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const passwordConfirmationRef = useRef<HTMLInputElement>();

  const [errors, setErrors] = useState<string[]>([]);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors([]);

    //  логика валидации и отправки данных может быть добавлена здесь

    //  валидации: проверяем, что все поля заполнены
    if (
      !emailRef.current?.value ||
      !passwordRef.current?.value
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
    <Container maxWidth="sm" sx={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px", backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" gutterBottom>
        {showSignUp ? "Sign Up" : "Log In"}
      </Typography>
      {showSignUp ? (
        <form onSubmit={handleSubmit}>
          {errors.length > 0 && (
            <div>
              {errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
          <FormGroup>
            <FormControl fullWidth>
              <InputLabel required htmlFor="email">
                Email Address
              </InputLabel>
              <Input id="email" type="email" inputRef={emailRef} />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl fullWidth>
              <InputLabel required htmlFor="password">
                Password
              </InputLabel>
              <Input id="password" type="password" inputRef={passwordRef} />
              <FormHelperText>We'll never share your password.</FormHelperText>
            </FormControl>
          </FormGroup>
          <FormGroup>
          <FormControl fullWidth>
            <InputLabel required htmlFor="password-confirmation">
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
          {errors.length > 0 && (
            <div>
              {errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
          <FormGroup>
            <FormControl fullWidth>
              <InputLabel required htmlFor="email">
                Email Address
              </InputLabel>
              <Input id="email" type="email" inputRef={emailRef} />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl fullWidth>
              <InputLabel required htmlFor="password">
                Password
              </InputLabel>
              <Input id="password" type="password" inputRef={passwordRef} />
              <FormHelperText>We'll never share your password.</FormHelperText>
            </FormControl>
          </FormGroup>
          <Button variant="contained" color="primary" type="submit">
            Log In
          </Button>
        </form>
      )}
      <Typography variant="body1" sx={{ marginTop: "1em" }}>
        {showSignUp ? "Already have an account?" : "Don't have an account?"} <Link to="#" onClick={showSignUp ? () => setShowSignUp(false) : handleSignUp}>{showSignUp ? "Log In" : "Sign Up"}</Link>
      </Typography>
    </Container>
  );
}

export default LogIn;