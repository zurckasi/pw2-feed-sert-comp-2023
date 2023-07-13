import styles from "./Avatar.module.css";

type Pros = {
  avatar: string;
};

export const Avatar = ({avatar}:Pros) => {
  return (
    <>
      <img
        width={55}
        className={styles.avatar}
        src={avatar}
      />
    </>
  );
};
