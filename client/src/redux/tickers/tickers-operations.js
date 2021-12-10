import { io } from "socket.io-client";
import {
  getTickersRequest,
  getTickersSuccess,
  getTickersError,
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
const operations = {
  getTickers,
};

export default operations;
