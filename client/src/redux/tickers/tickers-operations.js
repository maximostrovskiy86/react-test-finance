import { io } from "socket.io-client";
import {
  getTickersRequest,
  getTickersSuccess,
  getTickersError,
  addTickerRequest,
  deleteTickerRequest,
} from "./tickers-actions";

const socket = io.connect("http://localhost:4000/");

const getTickers = () => (dispatch) => {
  dispatch(getTickersRequest());
  try {
    socket.emit("start");
    socket.on("ticker", (data) => {
      dispatch(getTickersSuccess(data));
    });
  } catch (error) {
    dispatch(getTickersError(error));
  }
};

const addTicker = (ticker) => (dispatch) => {
  dispatch(addTickerRequest());
  socket.emit("addTicker", {
    ticker,
  });
};

const deleteTicker = (ticker) => (dispatch) => {
  dispatch(deleteTickerRequest());
  socket.emit("deleteTicker", {
    ticker,
  });
};

const operations = {
  getTickers,
  addTicker,
  deleteTicker,
};

export default operations;
