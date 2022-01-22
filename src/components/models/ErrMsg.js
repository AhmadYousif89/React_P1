import styles from "./ErrMsg.module.css";

const ErrMsg = (props) => {
  return (
    <div
      className={styles.err}
      style={props.msg === "" ? { display: "none" } : null}>
      {props.msg}
    </div>
  );
};

export default ErrMsg;
