//---------IMPORTS------------\

import classes from "./_ItemListMenu.module.scss";
import deleteIcon from "./delete.svg";
import renameIcon from "./rename.svg";

//---------COMPONENT----------\
const ItemListMenu = function () {
  return (
    <>
      <div className={classes.body}>
        <div className={classes.option}>
          <img
            className={classes.icon}
            src={renameIcon}
            alt="renameIconOnItem"
          />
          Rename
        </div>
        <div className={classes.option}>
          <img
            className={classes.icon}
            src={deleteIcon}
            alt="deleteIconOnItem"
          />
          Delete
        </div>
      </div>
      <div className={classes.pointer}></div>
    </>
  );
};

//---------EXPORTS------------\
export default ItemListMenu;
