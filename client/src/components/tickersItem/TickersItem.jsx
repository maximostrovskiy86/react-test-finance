import React from "react";
import PropTypes from "prop-types";
import style from "./TickersItem.module.scss";
import ArrowUp from "../arrowUp/ArrowUp";
import ArrowDown from "../arrowDown/ArrowDown";

const TickersItem = function ({
  ticker,
  exchange,
  price,
  change,
  changePercent,
  yd,
  dividend,
  lastTradeTime,
  isPriceUp,
}) {
  return (
    <li className={style.ticker}>
      <div className={style.tickerTitle}> {ticker}</div>
      <div className={style.exchange}>{exchange}</div>
      <div className={isPriceUp ? style.up : style.down}>{price}</div>
      <div className={style.change}> {change}</div>
      <div
        className={`${style.percent} ${
          isPriceUp ? style.upPercent : style.downPercent
        }`}
      >
        {isPriceUp ? <ArrowUp /> : <ArrowDown />}&nbsp;
        {changePercent}&nbsp;%
      </div>
      <div className={style.yd}>{yd}</div>
      <div className={style.dividend}>{dividend}</div>
      <div className={style.time}> {lastTradeTime}</div>
    </li>
  );
};

TickersItem.propTypes = {
  ticker: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  changePercent: PropTypes.string.isRequired,
  yd: PropTypes.string.isRequired,
  dividend: PropTypes.string.isRequired,
  lastTradeTime: PropTypes.string.isRequired,
  isPriceUp: PropTypes.bool.isRequired,
};

export default TickersItem;
