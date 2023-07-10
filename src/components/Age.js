import React from "react";

const Age = (props) => {
  const { years, months, days } = props.age;
  return (
    <div className="age-container">
      <p className="result">
        <span className="purple-text">
          {years && months !== "" && days ? years : "--"}
        </span>{" "}
        {years > 1 || !years ? "years" : "year"}
      </p>
      <p className="result">
        <span className="purple-text">
          {years && months !== "" && days ? months : "--"}
        </span>{" "}
        {months > 1 || !months ? "months" : "month"}
      </p>
      <p className="result">
        <span className="purple-text">
          {years && months !== "" && days ? days : "--"}
        </span>{" "}
        {days > 1 || !days ? "days" : "day"}
      </p>
    </div>
  );
};

export default Age;
