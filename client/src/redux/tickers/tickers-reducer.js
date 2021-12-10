import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getTickersRequest,
  getTickersSuccess,
  getTickersError,
} from "./tickers-actions";

const initialState = [];

const tickers = createReducer(initialState, {
  [getTickersSuccess]: (state, action) => action.payload,
});

const error = createReducer("", {
  [getTickersError]: (_, { payload }) => payload,
  [getTickersRequest]: () => "",
});

const tickerReducers = combineReducers({
  tickers,
  error,
});

export default tickerReducers;
