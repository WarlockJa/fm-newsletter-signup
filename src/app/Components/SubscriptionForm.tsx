import { useState } from "react";
import styles from "../../../styles/main.module.scss";

const SubscriptionForm = ({
  email,
  setEmail,
  setFormSubmitSuccess,
}: {
  email: string;
  setEmail: (value: string) => void;
  setFormSubmitSuccess: (value: boolean) => void;
}) => {
  // input states

  const [emailIncorrect, setEmailIncorrect] = useState(false);

  // switching between input form and success form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.length > 0 && validateEmail(email)) {
      setFormSubmitSuccess(true);
    } else {
      setEmailIncorrect(true);
    }
  };

  // email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = new RegExp(/[^\s@]+@[^\s@]+\.[^\s@]+/, "g");
    return emailRegex.test(email) ? true : false;
  };

  // on email input change validate email and remove error css if email is valid
  const handleEmailChange = (email: string) => {
    setEmail(email);
    validateEmail(email) && setEmailIncorrect(false);
  };
  return (
    <>
      <div className={styles.nl__bgImage}></div>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.nl__form}>
        <h1 className={styles.nl__form__header}>Stay updated!</h1>
        <h2 className={styles.nl__form__subheader}>
          Join 60,000+ product managers receiving monthly updates on:
        </h2>
        <ul className={styles.nl__form__list}>
          <li className={styles.nl__form__listItem}>
            <div className={styles.nl__form__listItemImageWrapper}>
              <div className={styles.nl__form__iconImage}></div>
            </div>
            <p className={styles.nl__form__listItemP}>
              Product discovery and building what matters
            </p>
          </li>
          <li className={styles.nl__form__listItem}>
            <div className={styles.nl__form__listItemImageWrapper}>
              <div className={styles.nl__form__iconImage}></div>
            </div>
            <p className={styles.nl__form__listItemP}>
              Measuring to ensure updates are a success
            </p>
          </li>
          <li className={styles.nl__form__listItem}>
            <div className={styles.nl__form__listItemImageWrapper}>
              <div className={styles.nl__form__iconImage}></div>
            </div>
            <p className={styles.nl__form__listItemP}>And much more!</p>
          </li>
        </ul>
        <div className={styles.nl__form__inputWrapper}>
          <div className={styles.nl__form__inputLabels}>
            <label
              htmlFor="form__inputEmail"
              className={styles.nl__form__inputLabel}
            >
              Email address
            </label>
            {emailIncorrect && (
              <p className={styles.nl__form__inputError}>
                Valid email required
              </p>
            )}
          </div>
          <input
            id="form__inputEmail"
            type="text"
            className={
              emailIncorrect
                ? `${styles.nl__form__input} ${styles.inputIncorrect}`
                : styles.nl__form__input
            }
            onChange={(e) => handleEmailChange(e.target.value)}
            value={email}
            placeholder="email@company.com"
            required
          />
        </div>
        <button type="submit" className={styles.nl__form__button}>
          Subscribe to monthly newsletter
        </button>
      </form>
    </>
  );
};

export default SubscriptionForm;
