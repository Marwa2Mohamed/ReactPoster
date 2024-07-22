import classes from "../CSS/NewPost.module.css";

// Main Component
/**
 *
 * @param {*} props
 * @returns NewPost componet
 * props.onBodyChange: here we are triggering the event Listener in PostList Component called bodyChangeHandler, that will
 * be used in Post Component
 */
const NewPost = (props) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
    </form>
  );
};

export default NewPost;
