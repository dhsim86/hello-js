import { useState } from "react";

function getResult() {
  console.log("called getResult");
  return 0;
}

function UseState02() {
  console.log("start");
  const [value, setValue] = useState(() => getResult());

  console.log(`state: ${value}`);

  const handleClick = () => {
    setValue(value + 1);
    console.log(`handleClick, current: ${value}`);  // not updated.
  };

  console.log(`render: ${value}`);

  return (
    <>
      <button onClick={handleClick}>UseState02</button>
      <span>{value}</span>
    </>
  );
}

export default UseState02;
