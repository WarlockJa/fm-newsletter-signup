"use client";
import { useState } from "react";
import styles from "../../styles/main.module.scss";
import SubscriptionForm from "./Components/SubscriptionForm";
import SuccessForm from "./Components/SuccessForm";

export default function Home() {
  // email state
  const [email, setEmail] = useState("");
  // form submit success state
  const [formSubmitSuccess, setFormSubmitSuccess] = useState(false);

  return (
    <main className={styles.nl}>
      <div
        className={
          formSubmitSuccess
            ? `${styles.nl__formsWrapperSuccess} ${styles.nl__formsWrapper}`
            : styles.nl__formsWrapper
        }
      >
        {formSubmitSuccess ? (
          <SuccessForm email={email} />
        ) : (
          <SubscriptionForm
            email={email}
            setEmail={setEmail}
            setFormSubmitSuccess={setFormSubmitSuccess}
          />
        )}
      </div>
    </main>
  );
}
