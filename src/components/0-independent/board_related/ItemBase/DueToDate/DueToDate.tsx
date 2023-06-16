//---------IMPORTS------------\

import classes from "./_DueToDate.module.scss";
import { FC, useState, ChangeEvent } from "react";

//---------COMPONENT----------\
const DueToDate: FC<{ dateString: string }> = function ({ dateString }) {
  //__c-hooks________

  const [inputDate, setInputDate] = useState(dateString);

  //__c-logic________

  const Logic = {
    handleDateChange(event: ChangeEvent<HTMLInputElement>) {
      setInputDate(event.currentTarget.value);
    },

    UI: {
      renderDisplayDate() {
        if (!(dateString === "none")) {
          const currentDate = new Date(dateString);
          const year = currentDate.getFullYear();
          const month = (currentDate.getMonth() + 1)
            .toString()
            .padStart(2, "0");
          const dayNum = currentDate.getDate().toString().padStart(2, "0");
          let day = "";
          switch (currentDate.getDay()) {
            case 0:
              day = "Su";
              break;
            case 1:
              day = "Mo";
              break;
            case 2:
              day = "Th";
              break;
            case 3:
              day = "We";
              break;
            case 4:
              day = "Th";
              break;
            case 5:
              day = "Fr";
              break;
            case 6:
              day = "Sa";
              break;

            default:
              day = "nn";
              break;
          }
          return (
            <>
              <span className={classes.day}>{`${day}, `}</span>
              <span>{`${dayNum}.${month}.${year}`}</span>
            </>
          );
        }
      },
    },
  };
  //__c-structure____
  return (
    <div className={classes.body}>
      <div className={classes.display}>{Logic.UI.renderDisplayDate()}</div>
      {/* <input type="date" value={inputDate} onChange={Logic.handleDateChange} /> */}
    </div>
  );
};

//---------EXPORTS------------\
export default DueToDate;
