"use client";
import Image from "next/image";
import styles from "./rating.module.css";
import { useState } from "react";
const Rating = ({ onSubmit }: { onSubmit: (rate: number) => void }) => {
  const [selectedRate, setSelectedRate] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRate(parseInt(e.currentTarget.value));
  };
  const handleClick = () => {
    onSubmit(selectedRate);
  };

  return (
    <div className="card">
      <div className={styles.star}>
        <div className={styles.starWrapper}>
          <Image src="/images/icon-star.svg" alt="star" fill />
        </div>
      </div>
      <h1 className="heading-lg">How did we do?</h1>
      <p className="body">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={styles.rates}>
        <div>
          <label
            htmlFor="r1"
            className={`${styles.rate} ${
              selectedRate === 1 ? styles.active : ""
            }`}
          >
            <input
              type="radio"
              value="1"
              name="rate"
              onChange={handleChange}
              id="r1"
            />
            1
          </label>
        </div>
        <div>
          <label
            htmlFor="r2"
            className={`${styles.rate} ${
              selectedRate === 2 ? styles.active : ""
            }`}
          >
            <input
              type="radio"
              value="2"
              name="rate"
              onChange={handleChange}
              id="r2"
            />
            2
          </label>
        </div>
        <div>
          <label
            htmlFor="r3"
            className={`${styles.rate} ${
              selectedRate === 3 ? styles.active : ""
            }`}
          >
            <input
              type="radio"
              value="3"
              name="rate"
              onChange={handleChange}
              id="r3"
            />
            3
          </label>
        </div>
        <div>
          <label
            htmlFor="r4"
            className={`${styles.rate} ${
              selectedRate === 4 ? styles.active : ""
            }`}
          >
            <input
              type="radio"
              value="4"
              name="rate"
              onChange={handleChange}
              id="r4"
            />
            4
          </label>
        </div>
        <div>
          <label
            htmlFor="r5"
            className={`${styles.rate} ${
              selectedRate === 5 ? styles.active : ""
            }`}
          >
            <input
              type="radio"
              value="5"
              name="rate"
              onChange={handleChange}
              id="r5"
            />
            5
          </label>
        </div>
      </div>
      <button
        className={styles.btn}
        onClick={handleClick}
        disabled={selectedRate === 0}
      >
        submit
      </button>
    </div>
  );
};

export default Rating;
