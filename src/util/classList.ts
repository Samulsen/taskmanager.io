const classList = function (classesArr: string[]) {
  let classListString: string;

  classesArr.forEach((classString: string) => {
    classListString = `${classListString} ${classString}`;
  });

  // return classListString;
};

export default classList;
