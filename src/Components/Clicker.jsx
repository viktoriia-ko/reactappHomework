import { useState } from "react";
import styles from "./divComponent.module.css";

export const Clicker = (props) => {
  const [count, setCount] = useState(props.num);
  return (
    <div className={styles.clicker}>
      <div className={styles.number}>{count}</div>

      <div className={styles.buttons}>
        <button
          className={styles.plus}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          className={styles.refresh}
          onClick={() => {
            setCount(0);
          }}
        >
          0
        </button>
        <button
          className={styles.minus}
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};
