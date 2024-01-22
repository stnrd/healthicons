import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHematologyLaboratory = (passedProps: SvgProps) => {
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8 16v.993-.005l-.005.01c-.01.032-.043.132-.146.314-.132.233-.322.499-.532.762a12.713 12.713 0 0 1-.812.92l-.012.013-.002.002-.291.293V31.5A5.5 5.5 0 0 0 29.793 33h-2.13A3.5 3.5 0 0 1 21 31.5V20.113l.018-.02c.179-.194.42-.467.665-.774.24-.302.5-.659.705-1.019.05-.09.105-.19.157-.3h3.843c.235.636.645 1.17.963 1.529.234.265.466.487.649.651V21h2v-1.784l-.396-.299h-.001l-.009-.007a6.096 6.096 0 0 1-.745-.706c-.426-.483-.649-.919-.649-1.204v-1h-7.4Z"
        fill="#000"
      />
      <Path
        d="M32 28.09c0 1.608-1.343 2.91-3 2.91s-3-1.302-3-2.91c0-2.544 3-5.09 3-5.09s3 2.546 3 5.09ZM20 10h9v4h-9v-4Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgHematologyLaboratory;
