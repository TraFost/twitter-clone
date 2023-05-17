import { useEffect, useState } from "react";

const useResize = (defaultSize = 1005) => {
  const [width, setWidth] = useState(defaultSize); // set the initial width to the current window width, 1005 cause my preference.

  const screenSize = {
    sm: 492,
    md: 705,
    lg: 1005,
  };

  // ** because the window object is not defined in server side rendering, the easy way is to use useEffect hook.
  // ** when the component is mounted, it will get the current window width, and set it to the state.
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth); // set the current window width to the state

    window.addEventListener("resize", handleWindowResize); // add event listener to the window, and call the handleWindowResize function when the window is resized. its like tracking the current width

    return () => window.removeEventListener("resize", handleWindowResize); // remove the event listener when the component is unmounted, a.k.a clean up function
  }, [width]);

  return [width, screenSize];
};

export default useResize;
