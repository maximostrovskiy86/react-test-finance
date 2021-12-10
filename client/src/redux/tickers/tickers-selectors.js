const getTickers = (state) => state.tickers;
const getLoading = (state) => state.loading;

const selectors = {
  getTickers,
  getLoading,
};

export default selectors;
