import { createAction } from "@reduxjs/toolkit";

export const getTickersRequest = createAction("tickers/getTickersRequest");
export const getTickersSuccess = createAction("tickers/getTickersSuccess");
export const getTickersError = createAction("tickers/getTickersError");

export const addTickerRequest = createAction("ticker/addTickerRequest");
export const addTickerSuccess = createAction("ticker/addTickerSuccess");
export const addTickerError = createAction("ticker/addTickerError");

export const deleteTickerRequest = createAction("ticker/deleteTickerRequest");
export const deleteTickerSuccess = createAction("ticker/deleteTickerSuccess");
export const deleteTickerError = createAction("ticker/deleteTickerError");
