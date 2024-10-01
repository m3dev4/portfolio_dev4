"use client"
import  { useEffect, useState } from "react";
import styles from "./style.module.css"

const Clock = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const updateTime = () => {
      const cd = new Date();
      setTime(
        `${zeroPadding(cd.getHours(), 2)}:${zeroPadding(
          cd.getMinutes(),
          2
        )}:${zeroPadding(cd.getSeconds(), 2)} `
      );
      setDate(
        `${zeroPadding(cd.getFullYear(), 4)}-${zeroPadding(
          cd.getMonth() + 1
        )}-${zeroPadding(cd.getDate(), 2)} ${week[cd.getDay()]}`
      );
    };
    const timerId = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(timerId);
  }, []);
  const zeroPadding = (num, digit) => {
    return num.toString().padStart(digit, "0");
  };
  return (
    <div className={styles.clock}>
        <p className={styles.date}>{date}</p>
        <p className={styles.time}>{time}</p>
    </div>
)
};

export default Clock;
