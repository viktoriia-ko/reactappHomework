import { useState } from "react";

export const Clicker = (props) => {
  const [z, setZ] = useState(props.num);
  return (
    <>
      <div class="clicker">
        <div class="number">{z}</div>

        <div class="buttons">
          <button
            class="plus"
            onClick={() => {
              setZ(z + 1);
            }}
          >
            +
          </button>
          <button
            class="refresh"
            onClick={() => {
              setZ(0);
            }}
          >
            0
          </button>
          <button
            class="minus"
            onClick={() => {
              setZ(z - 1);
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};
