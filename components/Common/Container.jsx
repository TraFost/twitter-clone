import React from "react";

const Container = ({ type, children, ...rest }) => {
  console.log(rest);

  return type === "section" ? (
    <section {...rest}>{children}</section>
  ) : (
    <div {...rest}>{children}</div>
  );
};

export default Container;
