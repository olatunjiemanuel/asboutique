import React from "react";
import styles from "./FormComponent.module.css";

interface FormComponentProps {
  name: string;
  email: string;
  inquiry: string;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeInquiry: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const FormComponent = ({
  name,
  email,
  inquiry,
  onChangeEmail,
  onChangeInquiry,
  onChangeName,
  onSubmit,
}: FormComponentProps) => {
  return (
    <div className={styles.formCntnr}>
      <form className={styles.form} onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className={styles.formInputs}
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={onChangeName}
          placeholder="Please enter yuour name here"
        />
        <label htmlFor="email">Email Address</label>
        <input
          className={styles.formInputs}
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="Please enter your email address here"
        />
        <label htmlFor="inquiry">Inquiry</label>
        <textarea
          className={styles.queryInput}
          name="inquiry"
          id="inquiry"
          value={inquiry}
          onChange={onChangeInquiry}
          placeholder="Please enter your inquiry here"
        />

        <input type="submit" className={styles.submitButton} />
      </form>
    </div>
  );
};

export default FormComponent;
