const names = ["Maxmi", "Sarah"];
const posts = ["React is Awesome!", "Enjoyed Learning React!"];
let randNumber = 0;
let chosenPost = "";
let chosenName = "";

const Post = () => {
  randNumber = Math.random();
  chosenName = randNumber > 0.5 ? names[0] : names[1];
  chosenPost = randNumber > 0.5 ? posts[0] : posts[1];
  return (
    <>
      <p>{chosenName}</p>
      <p>{chosenPost}</p>
    </>
  );
};

export default Post;
