import React from "react";
import PropTypes from "prop-types";
import style from "./Container.module.scss";

const Container = function ({ children }) {
  return <div className={style.Container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
