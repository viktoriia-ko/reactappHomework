import { useState } from "react";
import { Button } from "./Button";
import styles from "./divComponent.module.css";

export const Clicker = (props) => {
  const [count, setCount] = useState(props.num);
  return (
    <div className={styles.clicker}>
      <div className={styles.number}>{count}</div>

      <div className={styles.buttons}>
        <Button
          className={styles.plus}
          value={"+"}
          pushButton={() => setCount(count + 1)}
        />
        <Button
          className={styles.refresh}
          value={"0"}
          pushButton={() => setCount(0)}
        />
        <Button
          className={styles.minus}
          value={"-"}
          pushButton={() => setCount(count - 1)}
        />
      </div>
    </div>
  );
};
