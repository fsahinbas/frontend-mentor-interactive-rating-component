"use client";
import Image from "next/image";
import styles from "./thanks.module.css";
const Thanks = ({ rate }: { rate: number }) => {
  return (
    <div
      className="card"
      style={{ alignItems: "center", padding: "2.8125rem 2.5rem" }}
    >
      <div className={styles.imgWrapper}>
        <Image src="/images/illustration-thank-you.svg" alt="thank you" fill />
      </div>
      <p className={styles.result}>You selected {rate} out of 5</p>
      <h1 className="heading-lg">Thank you!</h1>
      <p className="body" style={{ textAlign: "center" }}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Thanks;
