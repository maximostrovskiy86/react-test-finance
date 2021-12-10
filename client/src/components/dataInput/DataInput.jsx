import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import style from "./DataInput.module.scss";
import { tickersOperations, tickersSelector } from "../../redux/tickers";

const DataInput = function () {
  const [inputValue, setInputValue] = useState("");
  const tickers = useSelector(tickersSelector.getTickers);
  const isLoadingTicker = useSelector(tickersSelector.getLoading);
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "name":
        setInputValue(value);
        break;
      default:
    }
  };

  const isFind = () =>
    tickers.some(
      (item) => item.ticker.toLowerCase() === inputValue.toLowerCase()
    );

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (isFind()) {
      alert(`${inputValue} is already in tickers.`);
    } else {
      dispatch(tickersOperations.addTicker(inputValue));
    }

    setInputValue("");
  };

  return (
    <form className={style.form} onSubmit={onHandleSubmit}>
      <label htmlFor="input">
        Ticker Name:
        <input
          id="input"
          type="text"
          name="name"
          className={style.ticker}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="inputValue"
          required
          onChange={onHandleChange}
          value={inputValue}
        />
      </label>
      <Button type="submit" variant="success" className={style.btn}>
        Add ticker
      </Button>
      {isLoadingTicker && <h4 className={style.title}>Loading...</h4>}
    </form>
  );
};

export default DataInput;
