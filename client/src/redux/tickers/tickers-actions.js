import { createAction } from "@reduxjs/toolkit";

export const getTickersRequest = createAction("tickers/getTickersRequest");
export const getTickersSuccess = createAction("tickers/getTickersSuccess");
export const getTickersError = createAction("tickers/getTickersError");
