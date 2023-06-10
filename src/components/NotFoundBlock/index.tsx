import styles from "./NotFoundBlock.module.scss";
const NotFoundBlock:React.FC = () => {
  return (
    <h1 className={styles.root}>
      <span>😕</span>
      <br />
      Page is not found
    </h1>
  );
};

export default NotFoundBlock;
