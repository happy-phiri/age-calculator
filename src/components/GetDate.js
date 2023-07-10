import React, { useState } from "react";
import Age from "./Age";

const GetDate = () => {
  const [dateEntered, setDateEntered] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [age, setAge] = useState({
    years: "",
    months: "",
    days: "",
  });

  // GETTING INPUT DATA FROM USER
  let errorMessage;
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setDateEntered((prevDate) => {
      return {
        ...prevDate,
        [name]: `${e.target.checkValidity() ? value : ""}`,
      };
    });
  };

  const currentDate = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  };

  // GET DAYS IN PREVIOUS MONTH TO USE IN CALCULATING NUMBER OF DAYS (AGE)
  let previousMonth;

  if (
    currentDate.month === "01" ||
    currentDate.month === "03" ||
    currentDate.month === "05" ||
    currentDate.month === "07" ||
    currentDate.month === "08" ||
    currentDate.month === "10" ||
    currentDate.month === "12"
  ) {
    previousMonth = 31;
  } else if (
    currentDate.month === "04" ||
    currentDate.month === "06" ||
    currentDate.month === "09" ||
    currentDate.month === "11"
  ) {
    previousMonth = 30;
  } else {
    previousMonth = 28;
  }

  // CALCULATING AGE BROKEN DOWN IN YEARS, MONTHS AND DAYS
  const captureInputValues = (e) => {
    if (dateEntered.day && dateEntered.month && dateEntered.year) {
      setAge(() => {
        return {
          years:
            currentDate.month > Number(dateEntered.month)
              ? currentDate.year - Number(dateEntered.year)
              : currentDate.year - (Number(dateEntered.year) + 1),
          months:
            currentDate.month >= Number(dateEntered.month)
              ? currentDate.month - Number(dateEntered.month)
              : 12 -
                (Number(dateEntered.month) - (12 - Number(currentDate.month))),
          days:
            currentDate.day >= Number(dateEntered.day)
              ? currentDate.day - dateEntered.day
              : previousMonth - dateEntered.day + currentDate.day,
        };
      });
      // setDateEntered("");
    } else {
      console.log("Check your values");
      console.log(errorMessage);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // CONDITION TO CHECK CORRECT MONTH-END

  let maximumDays;

  if (
    dateEntered.month === "01" ||
    dateEntered.month === "03" ||
    dateEntered.month === "05" ||
    dateEntered.month === "07" ||
    dateEntered.month === "08" ||
    dateEntered.month === "10" ||
    dateEntered.month === "12"
  ) {
    maximumDays = 31;
  } else if (
    dateEntered.month === "04" ||
    dateEntered.month === "06" ||
    dateEntered.month === "09" ||
    dateEntered.month === "11"
  ) {
    maximumDays = 30;
  } else {
    maximumDays = 29;
  }

  return (
    <div className="container">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div className="form">
          <div className="form-input">
            <label htmlFor="day">Day</label>
            <input
              type="number"
              min="1"
              max={maximumDays}
              name="day"
              id="day"
              onChange={handleChange}
              required
              placeholder="DD"
              autoComplete="off"
            />
          </div>

          <div className="form-input">
            <label htmlFor="month">Month</label>
            <input
              type="number"
              min="1"
              max="12"
              name="month"
              id="month"
              onChange={handleChange}
              required
              placeholder="MM"
              autoComplete="off"
            />
          </div>

          <div className="form-input">
            <label htmlFor="year">Year</label>
            <input
              type="number"
              min="1900"
              max={new Date().getFullYear()}
              name="year"
              id="year"
              onChange={handleChange}
              required
              placeholder="YYYY"
              autoComplete="off"
            />
          </div>
        </div>
        <button className="btn" onClick={captureInputValues}></button>
      </form>

      <Age age={age} />
    </div>
  );
};

export default GetDate;
