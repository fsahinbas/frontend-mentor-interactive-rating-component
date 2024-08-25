"use client";
import styles from "./page.module.css";
import Rating from "../components/rating/Rating";
import { useState } from "react";
import Thanks from "@/components/thanks/Thanks";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rate, setRate] = useState(0);

  const handleSubmit = (rate: number) => {
    setRate(rate);
    setIsSubmitted(true);
  };

  {
    {
      if (isSubmitted) {
        return <Thanks rate={rate} />;
      } else {
        return <Rating onSubmit={handleSubmit} />;
      }
    }
  }
}
