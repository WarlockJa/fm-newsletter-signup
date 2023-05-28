import styles from "../../../styles/main.module.scss";

const SuccessForm = ({ email }: { email: string }) => {
  return (
    <>
      <form className={`${styles.nl__form} ${styles.nl__formSuccess}`}>
        <div className={styles.nl__successIcon}></div>
        <h1 className={styles.nl__form__header}>Thanks for subscribing!</h1>
        <h2 className={styles.nl__form__subheader}>
          A confirmtaion email has been sent to{" "}
          <span className={styles.nl__textBold}>{email}</span>. Please open it
          and click the button inside to confirm your subscription
        </h2>
        <button
          type="submit"
          className={`${styles.nl__form__button} ${styles.nl__form__buttonSuccess}`}
        >
          Dismiss message
        </button>
      </form>
    </>
  );
};

export default SuccessForm;
