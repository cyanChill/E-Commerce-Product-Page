import styles from "./tag.module.css";

type TagType = {
  discount: number;
};

const Tag = ({ discount }: TagType) => {
  return <span className={styles.tag}>{discount * 100}%</span>;
};

export default Tag;
