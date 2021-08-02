import { useState } from "react";
import { Button } from "./Button";
import styles from "./divComponent.module.css";

export const Clicker = (props) => {
  const [count, setCount] = useState(props.num);
  const countPlus = count + 1;
  const countMinus = count - 1;
  return (
    <div className={styles.clicker}>
      <div className={styles.number}>{count}</div>

      <div className={styles.buttons}>
        <Button
          className={styles.plus}
          value={"+"}
          pushButton={() => setCount(countPlus)}
        />
        <Button
          className={styles.refresh}
          value={"0"}
          pushButton={() => setCount(0)}
        />
        <Button
          className={styles.minus}
          value={"-"}
          pushButton={() => setCount(countMinus)}
        />
      </div>
    </div>
  );
};
