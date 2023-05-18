//---------IMPORTS------------\

import classes from "./_entrypage.module.scss";

//---------COMPONENT----------\

const Entrypage = function () {
  return (
    <div className={classes.entrypage}>
      <div className="entrypage__upper"></div>
      <div className="entrypage__middle"></div>
      <div className="entrypage__lower"></div>
    </div>
  );
};

//---------EXPORTS------------\

export default Entrypage;
