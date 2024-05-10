import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgJustice = (passedProps: SvgProps) => {
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
        d="M25 10.17c.492.175.925.473 1.262.859l7.99-1.998a1.004 1.004 0 0 1 .83.156c.112.08.207.182.278.302L40.054 17H42v.003c0 .69-.082 1.359-.236 1.997-.833 3.45-3.77 6-7.264 6-3.495 0-6.431-2.55-7.264-6A8.523 8.523 0 0 1 27 17h1.474l3.705-5.389-5.18 1.295L27 13a3.001 3.001 0 0 1-2 2.83V38h3v2h6v2H14v-2h6v-2h3V15.83a3.01 3.01 0 0 1-1.567-1.277l-5.846 1.559 4.598 7.106h.935v.003c0 .69-.082 1.358-.236 1.997-.833 3.45-3.77 6-7.264 6-3.495 0-6.431-2.55-7.264-6a8.52 8.52 0 0 1-.236-2h1.208l5.855-8.295a1 1 0 0 1 .56-.39l7.285-1.942A3.004 3.004 0 0 1 23 10.171V6h2v4.17ZM37.696 17l-3.236-5.177L30.901 17h6.795Zm-19.893 6.218-3.839-5.933-4.188 5.933h8.027ZM39.69 19c-.77 2.385-2.874 4-5.19 4-2.316 0-4.42-1.615-5.19-4h10.38Zm-20.88 6.218c-.77 2.385-2.874 4-5.19 4-2.316 0-4.42-1.615-5.19-4h10.38ZM24 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </Svg>
  );
};
export default SvgJustice;
