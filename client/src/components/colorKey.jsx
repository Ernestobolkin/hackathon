import { useState } from "react";

export const ColorKey = () => {
  const [click, setClick] = useState(false);

  const onClickHandle = () => {
    setClick(!click);
  };
  return (
    <>
      <button onClick={onClickHandle} className="colorKey">
        Colors
      </button>
      <span className={click && "colorKeyContiner"}>
        {click && (
          <span>
            <span style={{ color: "blue" }}>Blue: Judaism &nbsp;|&nbsp;</span>
            <span style={{ color: "red" }}>
              Red: Christianity&nbsp;|&nbsp;{" "}
            </span>
            <span style={{ color: "green" }}>Green: Muslim</span>
          </span>
        )}
      </span>
    </>
  );
};
