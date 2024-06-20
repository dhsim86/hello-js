import { useState } from "react";

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

function UseState03() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  const handleClick = async () => {
    setPending((p) => p + 1); // 1. 처리 후 - render
    await delay(3000); // 2. 3초 대기

    // 3. 이하 차례대로 처리 후 - render
    setPending((p) => p - 1);
    setCompleted((c) => c + 1);
  };

  return (
    <>
      <button onClick={handleClick}>UseState03</button>
      <span>pending: {pending}</span>
      <span>completed: {completed}</span>
    </>
  );
}

export default UseState03;
