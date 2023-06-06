//---------IMPORTS------------\

import classes from "./_ProfileButton.module.scss";
import { DataContext, appMetaData } from "../../../../../context/DataContext";

//---------COMPONENT----------\

const ProfileButton = function () {
  const UserMetaData = DataContext()!.appMetaData as appMetaData;
  const Logic = {
    evaluateUserShort() {
      const userInitials = UserMetaData.firstName[0] + UserMetaData.lastName[0];
      return userInitials;
    },
  };
  return <div className={classes.body}>{Logic.evaluateUserShort()}</div>;
};

//---------EXPORTS------------\

export default ProfileButton;
