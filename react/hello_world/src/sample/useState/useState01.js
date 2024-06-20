import { useState } from "react";

function getResult() {
  //console.log("called getResult");
  return 0;
}

function UseState01() {
  //const [value, setValue] = useState(getResult());
  const [value, setValue] = useState(() => (getResult()));
  const handleClick = () => {
    //setValue(value + 1);  // 0 + 1
    //setValue(value + 1);  // 0 + 1

    setValue((value) => value + 1); // 0 + 1
    setValue((value) => value + 1); // 1 + 1
  };

  return (
    <>
      <button onClick={handleClick}>UseState01</button>
      <span>{value}</span>
    </>
  );
}

export default UseState01;
