import { useState } from "react";
import Post from "./Post";
import styles from "../CSS/PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostList = () => {
  //variables
  let [bodyCurrentValue, setBodyValue] = useState("");
  let [authorCurrentValue, setAuthorValue] = useState("");
  let [modalIsOpen, setModelState] = useState(true);
  let modalContent = (
    <Modal onClose = {modalChangeHandler}>
      <NewPost
        onAuthorChange={authorChangeHandler}
        onBodyChange={bodyChangeHandler}
        onClose = {modalChangeHandler}
      />
    </Modal>
  );

  //main component
  return (
    <>
      {modalIsOpen ? modalContent : null}
      <ul className={styles.posts}>
        <Post author={authorCurrentValue} body={bodyCurrentValue} />
      </ul>
    </>
  );

  //regular functions
  function bodyChangeHandler(event) {
    setBodyValue(event.target.value);
  }

  function authorChangeHandler(event) {
    setAuthorValue(event.target.value);
  }
  function modalChangeHandler (){
    setModelState(false);
  }
};

export default PostList;
