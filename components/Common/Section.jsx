import React from "react";

const Section = ({ children, ...rest }) => {
  return (
    <section {...rest} className="text-red-500">
      {children}
    </section>
  );
};

export default Section;
