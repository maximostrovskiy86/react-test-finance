import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getTickersRequest,
  getTickersSuccess,
  getTickersError,
  addTickerRequest,
  addTickerSuccess,
  addTickerError,
  deleteTickerRequest,
  deleteTickerSuccess,
  deleteTickerError,
} from "./tickers-actions";

const initialState = [];

const tickers = createReducer(initialState, {
  [getTickersSuccess]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [addTickerRequest]: () => true,
  [addTickerSuccess]: () => false,
  [addTickerError]: () => false,
  [deleteTickerRequest]: () => true,
  [deleteTickerSuccess]: () => false,
  [deleteTickerError]: () => false,
  [getTickersRequest]: () => true,
  [getTickersSuccess]: () => false,
  [getTickersError]: () => false,
});

const error = createReducer("", {
  [getTickersError]: (_, { payload }) => payload,
  [getTickersRequest]: () => "",
});

const tickerReducers = combineReducers({
  tickers,
  loading,
  error,
});

export default tickerReducers;
