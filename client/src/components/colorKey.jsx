export const ColorKey = () => {
  const onClickHandle = () => {
    alert("Blue - Judaism \nRed - Christianity \nGreen - Muslim ");
  };
  return (
    <>
      <button onClick={onClickHandle} className="colorKey">
        Colors
      </button>
    </>
  );
};
