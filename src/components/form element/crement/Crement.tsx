import { useState, useEffect } from "react";

import { ReactComponent as MinusSVG } from "../../../assets/icon-minus.svg";
import { ReactComponent as PlusSVG } from "../../../assets/icon-plus.svg";
import styles from "./Crement.module.css";

interface CrementInterface {
  value: number;
  onChange: (val: number) => void;
}

const Crement = ({ value = 0, onChange }: CrementInterface) => {
  const [val, setVal] = useState<number>(value);

  const handleValChange = (type: "inc" | "dec") => {
    if (type === "inc") {
      setVal((prev) => prev + 1);
    } else {
      setVal((prev) => (prev !== 0 ? prev - 1 : prev));
    }
  };

  useEffect(() => {
    onChange(val);
  }, [val,onChange]);

  useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    <div className={styles.container}>
      {/* Value read by form element on submission */}
      <input value={val} style={{ display: "none" }} readOnly />

      <MinusSVG onClick={() => handleValChange("dec")} className={styles.svg} />
      <span className={styles.value}>{val}</span>
      <PlusSVG onClick={() => handleValChange("inc")} className={styles.svg} />
    </div>
  );
};

export default Crement;
