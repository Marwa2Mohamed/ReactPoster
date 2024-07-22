import styles from "../CSS/Modal.module.css";
/**
 *
 * @param {*} param0
 * @returns
 * {children}: another way of implementing props and specify target properties in the parameters instead of using
 * props in the parameters then props.children (or any property) to access a value.
 */
function Modal({ children, onClose }) {
  return (
    <>
      <div className={styles.backdrop} onClick = {onClose}></div>
      <dialog open className={styles.modal}> {children}</dialog>
    </>
  );
}

export default Modal;
