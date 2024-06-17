import React, { useState, useRef } from "react";
import styles from "./SignUp.module.css"; // Updated the import statement
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const signUpButtonRef = useRef<HTMLButtonElement | null>(null);

  const navigate = useNavigate();

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    ref: React.RefObject<HTMLInputElement | HTMLButtonElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (document.activeElement === emailRef.current) {
        passwordRef.current?.focus();
      } else if (document.activeElement === passwordRef.current) {
        confirmPasswordRef.current?.focus();
      } else {
        ref.current?.focus();
      }
    }
  };

  const handleEnterOnConfirmPassword = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (document.activeElement === confirmPasswordRef.current) {
        signUpButtonRef.current?.click();
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName: lastName || null,
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log("Successful authorization:", data);

      alert("Confirm your email in your inbox");

      localStorage.setItem("username", data.username);
      navigate("/Login");
    } catch (error) {
      setError("Error during registration. Please check the entered data.");
      console.error("Error sending data:", error);
    }
  };

  const handleEyeClickPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setShowPassword(!showPassword);
  };

  const handleEyeClickConfirmPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className={styles["auth-container"]}>
      <h2>Sign Up</h2>

      {error && <p className={styles["error-message"]}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className={styles["input-group"]}>
          <label htmlFor="first-name">First Name*</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, lastNameRef)}
            placeholder="your name"
            required
          />
        </div>
        <div className={styles["input-group"]}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, emailRef)}
            placeholder="your last name"
            ref={lastNameRef}
          />
        </div>
        <div className={styles["input-group"]}>
          <label htmlFor="email">Email Address*</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, passwordRef)}
            placeholder="john@example.com"
            required
            ref={emailRef}
          />
        </div>
        <div className={styles["input-group"]}>
          <label htmlFor="password">Password*</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, confirmPasswordRef)}
              placeholder="Qwerty123!"
              required
              style={{ paddingRight: "40px" }}
              ref={passwordRef}
            />
            <button
              className={styles["eye-icon"]}
              onClick={handleEyeClickPassword}
            >
              {showPassword ? <Eye style={{ color: "black" }} /> : <EyeOff style={{ color: "black" }} />}
            </button>
          </div>
        </div>
        <div className={styles["input-group"]}>
          <label htmlFor="confirm-password">Confirm Password*</label>
          <div style={{ position: "relative" }}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyDown={handleEnterOnConfirmPassword}
              placeholder="Qwerty123!"
              required
              style={{ paddingRight: "40px" }}
              ref={confirmPasswordRef}
            />
            <button
              className={styles["eye-icon"]}
              onClick={handleEyeClickConfirmPassword}
            >
              {showConfirmPassword ? <Eye style={{ color: "black" }} /> : <EyeOff style={{ color: "black" }} />}
            </button>
          </div>
        </div>
        <p className={styles["consent-text"]}>
          By entering the resource, you automatically consent to the processing
          of personal data.
          <a href="/#/privacy-policy"> Personal Policy</a>
        </p>
        <div className={styles["center"]}>
          <button className={styles["save-button"]} type="submit" ref={signUpButtonRef}>
            Sign Up
          </button>
        </div>
      </form>

      <p>
        Already have an account? <a href="/#/Login">Log In</a>
      </p>
    </div>
  );
};

export default SignUp;

