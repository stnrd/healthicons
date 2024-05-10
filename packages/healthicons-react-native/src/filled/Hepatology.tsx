import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHepatology = (passedProps: SvgProps) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H22.012V29h-2v13H9a3 3 0 0 1-3-3V9Zm5.552 26c-3.766 0-2.837-12.179-.593-16.893C13.202 13.393 16.271 13 22.549 13c3.845 0 4.82.616 5.576 1.093.478.302.868.549 1.84.549 1.005 0 2.411-.315 3.817-.63 2.11-.473 4.219-.946 4.972-.355 1.255.985-2.511 8.209-6.277 8.209-1.94 0-3.102 1.46-4.23 2.877-1.064 1.336-2.097 2.634-3.722 2.634-1.674 0-2.72.593-3.766 1.185-1.046.592-2.093 1.184-3.767 1.184-1.372 0-1.826 1.154-2.308 2.38-.547 1.39-1.13 2.874-3.132 2.874Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.073 15.027c.582-1.659 1.785-3.677 4.242-5.017l.957 1.756c-1.914 1.044-2.848 2.602-3.312 3.923a8.165 8.165 0 0 0-.396 1.69 6.38 6.38 0 0 0-.047.617v.028-.003l-1 .019-1 .019V17.975c.001-.046.002-.11.006-.189.007-.158.022-.38.055-.65.067-.54.205-1.282.495-2.109Z"
      />
      <Path d="M14.272 25.258c2.278 1.67 6.835 0 6.835 0V22.75s-2.278 2.089-4.936 0c-2.659-2.088-4.178.836-1.9 2.506Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.049 20.628c.54-.472 1.262-.793 1.95-.793v2c-.107 0-.378.076-.633.299-.236.206-.354.446-.354.687V29h-2V22.82c0-.95.478-1.704 1.037-2.193Z"
      />
    </Svg>
  );
};
export default SvgHepatology;
