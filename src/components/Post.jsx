import styles from "../CSS/Post.module.css";
const Post = (props) => {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{props.author}</p>
      <p className={styles.text}>{props.body}</p>
    </li>
  );
};

export default Post;
