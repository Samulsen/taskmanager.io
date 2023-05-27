const logCol = function (text: string, col: string): void {
  let colorString;
  switch (col) {
    case "red":
      colorString = "color: red";
      break;
    case "green":
      colorString = "color:green";
      break;
    default:
      break;
  }

  console.log("%c" + text, colorString);
};

export default logCol;
