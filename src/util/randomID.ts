const randomID = function () {
  let id = "";
  const digits = "0123456789";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    id += digits.charAt(randomIndex);
  }

  return id;
};

export default randomID;
