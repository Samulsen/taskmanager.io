//---------IMPORTS------------\
import classes from "./_Comment.module.scss";

//---------COMPONENT----------\
const Comment = function () {
  return (
    <div className={classes.body}>
      <div className={classes.display}>
        Lorem ipsum dolor sit amet, consemus munur...
      </div>
      {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
    </div>
  );
};

//---------EXPORTS------------\
export default Comment;
