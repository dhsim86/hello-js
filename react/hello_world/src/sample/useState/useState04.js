import { useState } from "react";

function UseState04() {
  const [count, setCount] = useState(0);
  let timerId;
  console.log("start UseState04")

  const handleStart = () => {
    timerId = setInterval(() => {
      // 1. state 를 변경하면 (set)
      // 2. 함수가 다시 실행돼서, 실행 context 가 다르므로 `timerId` 값이 undefined 라서
      // 3. clear 가 동직하지 않는다. (timer id 값이 있어야 clear 가능)
      setCount((prev) => prev + 1);
    }, 2000);
  };

  const handleStop = () => {
    clearInterval(timerId);
  };

  return (
    <>
      <h2>count: {count}</h2>
      <div>
        <button type="button" onClick={handleStart}>
          시작
        </button>
      </div>
      <div>
        <button type="button" onClick={handleStop}>
          중지
        </button>
      </div>
    </>
  );
}

export default UseState04;
