//---------IMPORTS------------\

import classes from "./_ProfileButton.module.scss";
import { MetadataContext } from "../../../../../context/MetadataContext";

//---------COMPONENT----------\

const ProfileButton = function () {
  const { firstName, lastName } = MetadataContext();

  const Logic = {
    evaluateUserShort() {
      const userInitials = firstName[0] + lastName[0];
      return userInitials;
    },
  };
  return (
    <div
      data-description="profile settings currently not available..."
      className={classes.body}
    >
      {Logic.evaluateUserShort()}
    </div>
  );
};

//---------EXPORTS------------\

export default ProfileButton;
