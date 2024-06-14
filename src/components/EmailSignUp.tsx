import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./EmailSignUp.module.css";
import validateInput from "../utils/validateInput";
import ErrorIcon from "./ErrorIcon";

interface Props {
  contactPhone: string;
  contactEmail: string;
}

interface ErrorProps {
  name: string;
  email: string;
}

const EmailSignUp = ({ contactPhone, contactEmail }: Props) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
  });

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const newInputValues = {
      ...inputValues,
      [event.target.name]: event.target.value,
    };
    setInputValues(newInputValues);
  }

  const [error, setError] = useState<Partial<ErrorProps>>({});

  function handleValidation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(validateInput(inputValues));
  }

  return (
    <div className={styles["email-sign-up"]}>
      <h1 className={`${styles["title"]} ${styles["dark"]}`}>
        register for the event!
      </h1>
      <div className={styles["container"]}>
        <form className={styles["form"]} onSubmit={handleValidation} noValidate>
          <label htmlFor="name">name</label>
          <div className={styles["input-container"]}>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
              onChange={handleInput}
            />
            {error.name && (
              <div className={styles["error-icon"]}>
                <ErrorIcon />
              </div>
            )}
            {error.name && <p className={styles["error"]}>{error.name}</p>}
          </div>
          <label htmlFor="email">email</label>
          <div className={styles["input-container"]}>
            <input
              type="email"
              id="email"
              placeholder="abc@example.com"
              name="email"
              onChange={handleInput}
            />
            {error.email && (
              <div className={styles["error-icon"]}>
                <ErrorIcon />
              </div>
            )}
            {error.email && <p className={styles["error"]}>{error.email}</p>}
          </div>
          <button>register now!</button>
        </form>
        <div className={styles["contact"]}>
          <a href="#">{contactPhone}</a>
          <a href="#">{contactEmail}</a>
        </div>
      </div>
    </div>
  );
};

export default EmailSignUp;
