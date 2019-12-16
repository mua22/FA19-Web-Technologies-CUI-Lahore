import React from "react";

const Calculator = () => {
  let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [screen, setScreen] = React.useState("");
  const [operand, setOperand] = React.useState("");
  const [firstValue, setFirstValue] = React.useState("");
  const handleCalcBtnonClick = title => {
    setScreen(screen + title);
  };
  return (
    <React.Fragment>
      <h1>Calculator</h1>
      <input type="text" disabled="disabled" value={screen} /> {operand}{" "}
      {firstValue}
      <hr />
      {digits.map(d => (
        <CalcButton key={d} title={d} onClickHandler={handleCalcBtnonClick} />
      ))}
      <hr />{" "}
      <CalcButton
        title="+"
        colorClass="btn btn-danger"
        onClickHandler={e => {
          setOperand("+");
          setFirstValue(screen);
          setScreen("");
        }}
      />
    </React.Fragment>
  );
};

export default Calculator;

const CalcButton = ({ title, onClickHandler, colorClass }) => {
  return (
    <>
      <button
        className={colorClass ? colorClass : "btn btn-info"}
        onClick={e => onClickHandler(title)}
      >
        {title}
      </button>
    </>
  );
};
