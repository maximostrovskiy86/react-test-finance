import React from "react";
import Container from "../components/container/Container";
import Section from "../components/section/Section";
import Tickers from "../components/tickers/Tickers";

const TickersViews = function () {
  return (
    <Container>
      <Section title="Tickers">
        <Tickers />
      </Section>
    </Container>
  );
};

export default TickersViews;
