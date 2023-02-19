import { useState } from "react";

interface MessageProps {
  counter: number;
}

interface CounterProps {
  render: (value: any) => JSX.Element;
}

const Counter = ({ render }: CounterProps) => {
  const [counter, setCounter] = useState<number>(0);

  const increaseCounter = (): void => setCounter((prev) => prev + 1);
  const decreaseCounter = (): void => setCounter((prev) => prev - 1);
  const resetCounter = (): void => setCounter(0);
  return (
    <>
      {render(counter)}
      <div className="flex-row">
        <button
          className="btn btn-primary text-uppercase border me-2 p-2"
          onClick={increaseCounter}
        >
          Increase
        </button>
        <button
          className="btn btn-warning text-uppercase border me-2 p-2"
          onClick={decreaseCounter}
        >
          Decrease
        </button>
        <button
          className="btn btn-danger text-uppercase border p-2"
          onClick={resetCounter}
        >
          Reset
        </button>
      </div>
    </>
  );
};

const Message = ({ counter }: MessageProps) => {
  return (
    <>
      <p className="fs-2 pt-5">Current value is: {counter}</p>
    </>
  );
};

const RenderPropsSample = () => {
  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <Counter render={(counter) => <Message counter={counter} />} />
    </div>
  );
};

export default RenderPropsSample;
