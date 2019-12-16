import React from "react";

const Calculator = () => {
  let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let operands = ["+", "-"];
  const [firstValue, setFirstValue] = React.useState("");
  const [secondValue, setSecondValue] = React.useState("");
  const [operand, setOperand] = React.useState("");
  const digitClicked = d => {
    setFirstValue(firstValue + d);
  };
  const operandClicked = o => {
    console.log(o + " Clicked");
    setSecondValue(firstValue);
    setOperand(o);
    setFirstValue("");
  };
  const equalClicked = () => {
    const result = 0;
    switch (operand) {
      case "+":
        setFirstValue(parseInt(firstValue) + parseInt(secondValue));
        break;
      default:
        break;
    }
    setSecondValue("");
    setOperand("");
  };
  return (
    <div>
      <h1>Calculator</h1>
      <input type="text" disabled="disabled" value={firstValue} />
      {operand && operand} {operand && secondValue}
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {digits.map(d => (
          <CalcButton title={d} onBtnClicked={digitClicked} />
        ))}
      </div>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {operands.map(d => (
          <CalcButton
            title={d}
            onBtnClicked={operandClicked}
            btnStyle="btn btn-danger"
          />
        ))}
      </div>
      <hr />
      <CalcButton
        btnStyle="btn btn-lg btn-success"
        title="="
        onBtnClicked={equalClicked}
      />
    </div>
  );
};

const CalcButton = ({ title, onBtnClicked, btnStyle }) => {
  let buttonStyle = btnStyle ? btnStyle : "btn btn-info";
  return (
    <div style={{ flex: "20%" }}>
      <button className={buttonStyle} onClick={e => onBtnClicked(title)}>
        {title}
      </button>
    </div>
  );
};
export default Calculator;
