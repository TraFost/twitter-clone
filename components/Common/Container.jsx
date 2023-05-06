import React from "react";

const Container = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export default Container;
