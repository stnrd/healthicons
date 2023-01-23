import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGlobalPandemic = (passedProps: SvgProps) => {
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
        d="M30.089 7.03a18.016 18.016 0 0 0-9.804-.625 18.06 18.06 0 0 0-8.684 4.613 18.167 18.167 0 0 0-5 8.492 18.22 18.22 0 0 0 .163 9.864 18.16 18.16 0 0 0 5.278 8.32 18.054 18.054 0 0 0 8.832 4.322 1 1 0 1 1-.357 1.968 20.054 20.054 0 0 1-9.81-4.8 20.16 20.16 0 0 1-5.859-9.236A20.22 20.22 0 0 1 4.668 19a20.166 20.166 0 0 1 5.55-9.427 20.06 20.06 0 0 1 9.645-5.123 20.016 20.016 0 0 1 10.892.695 20.083 20.083 0 0 1 8.92 6.308 20.187 20.187 0 0 1 4.316 10.056 1 1 0 1 1-1.982.262 18.187 18.187 0 0 0-3.888-9.06 18.082 18.082 0 0 0-8.032-5.68Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.149 19a3.554 3.554 0 0 1 2.195.754 3.581 3.581 0 0 1 1.267 1.948v.003l1.284 5.163a3.598 3.598 0 0 1-.65 3.067 3.569 3.569 0 0 1-2.812 1.378h-1.024l-1.567 7.882a1 1 0 1 1-1.961-.39l1.726-8.687a1 1 0 0 1 .98-.805h1.846a1.555 1.555 0 0 0 1.233-.605 1.588 1.588 0 0 0 .287-1.36l-1.282-5.157v-.002a1.582 1.582 0 0 0-.559-.859 1.554 1.554 0 0 0-.96-.33H6a1 1 0 1 1 0-2h9.149ZM29.403 11.767a3.3 3.3 0 0 1 2.11-.767H38a1 1 0 1 1 0 2h-6.489c-.293 0-.586.103-.831.307a1.56 1.56 0 0 0-.514.845l-1.192 5.077a1 1 0 1 1-1.948-.458l1.193-5.077a3.563 3.563 0 0 1 1.184-1.927Z"
        fill="#333"
      />
      <Path
        d="M31 37.4a5.4 5.4 0 1 0 0-10.8 5.4 5.4 0 0 0 0 10.8Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 27.6a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8ZM24.6 32a6.4 6.4 0 1 1 12.8 0 6.4 6.4 0 0 1-12.8 0ZM29.1 23a1 1 0 0 1 1-1h1.8a1 1 0 1 1 0 2h-1.8a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 27.5v-3.6h2v3.6h-2ZM35.693 24.093a1 1 0 0 1 1.414 0l1.8 1.8a1 1 0 0 1-1.414 1.414l-1.8-1.8a1 1 0 0 1 0-1.414Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m33.893 27.693 2.7-2.7 1.414 1.414-2.7 2.7-1.414-1.414ZM40 30.1a1 1 0 0 1 1 1v1.8a1 1 0 1 1-2 0v-1.8a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.4 32a1 1 0 0 1 1-1H40a1 1 0 1 1 0 2h-3.6a1 1 0 0 1-1-1ZM39.807 36.693a1 1 0 0 1 0 1.414l-1.8 1.8a1 1 0 0 1-1.414-1.414l1.8-1.8a1 1 0 0 1 1.414 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m36.207 34.893 2.7 2.7-1.414 1.414-2.7-2.7 1.414-1.414ZM29.1 41a1 1 0 0 1 1-1h1.8a1 1 0 1 1 0 2h-1.8a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 36.4a1 1 0 0 1 1 1V41a1 1 0 1 1-2 0v-3.6a1 1 0 0 1 1-1ZM23.093 36.693a1 1 0 0 1 1.414 0l1.8 1.8a1 1 0 0 1-1.414 1.414l-1.8-1.8a1 1 0 0 1 0-1.414Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m28.107 36.307-2.7 2.7-1.414-1.414 2.7-2.7 1.414 1.414ZM22 30.1a1 1 0 0 1 1 1v1.8a1 1 0 1 1-2 0v-1.8a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 32a1 1 0 0 1 1-1h3.6a1 1 0 1 1 0 2H22a1 1 0 0 1-1-1ZM26.307 24.093a1 1 0 0 1 0 1.414l-1.8 1.8a1 1 0 0 1-1.414-1.414l1.8-1.8a1 1 0 0 1 1.414 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m26.693 29.107-2.7-2.7 1.414-1.414 2.7 2.7-1.414 1.414Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgGlobalPandemic;
