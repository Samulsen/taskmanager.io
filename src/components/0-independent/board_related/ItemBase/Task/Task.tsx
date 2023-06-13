//---------IMPORTS------------\
import classes from "./_Task.module.scss";

//---------COMPONENT----------\

const Task = function () {
  return (
    <div className={classes.body}>
      <div className={classes.display}>This is a Task</div>
    </div>
  );
};

//---------EXPORTS------------\
export default Task;
