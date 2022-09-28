import { useState } from "react";

import styles from "./Crement.module.css";

const Crement = () => {
  const [val, setVal] = useState<number>(0);

  return (
    <div className={styles.container}>
      {/* Value read by form element on submission */}
      <input value={val} style={{ display: "none" }} readOnly />

      <button onClick={() => setVal((prev) => prev - 1)}>-</button>
      <span>{val}</span>
      <button onClick={() => setVal((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default Crement;
