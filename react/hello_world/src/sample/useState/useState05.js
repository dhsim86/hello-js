import { useState } from "react";

function UseState05() {
  const [obj, setObj] = useState({ status: "false" });

  const handleClick = () => {
    obj.status = "true";
    
    //setObj(obj);    // update only, no rendering
    setObj({...obj})    // update and rendering
  };

  return (
    <>
      <button onClick={handleClick}>UseState05</button>
      <span>status: {obj.status}</span>
    </>
  );
}

export default UseState05;
