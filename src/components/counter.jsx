import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="mb-4 text-primary fw-bold">Counter App</h1>

      <div className="card shadow-lg p-4 text-center">
        <h2 className={`display-4 fw-bold ${counter >= 0 ? "text-success" : "text-danger"}`}>
          {counter}
        </h2>

        <div className="mt-3">
          <button
            type="button"
            className="btn btn-success mx-2 px-4 py-2 fw-bold"
            onClick={() => setCounter(counter + 1)}
          >
            ➕ Increment
          </button>

          <button
            type="button"
            className="btn btn-danger mx-2 px-4 py-2 fw-bold"
            onClick={() => setCounter(counter - 1)}
          >
            ➖ Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;