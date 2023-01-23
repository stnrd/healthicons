import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartInfectedDecreasing = (passedProps: SvgProps) => {
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
      <Path fill="#fff" d="M0 0h48v48H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 11.4a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2Zm-6.1 4.1a6.1 6.1 0 1 1 12.2 0 6.1 6.1 0 0 1-12.2 0ZM30.65 7a1 1 0 0 1 1-1h1.7a1 1 0 1 1 0 2h-1.7a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.5 11.25v-3.4h2v3.4h-2ZM36.893 7.993a1 1 0 0 1 1.414 0l1.7 1.7a1 1 0 0 1-1.414 1.414l-1.7-1.7a1 1 0 0 1 0-1.414Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m35.193 11.393 2.55-2.55 1.414 1.414-2.55 2.55-1.414-1.414ZM41 13.65a1 1 0 0 1 1 1v1.7a1 1 0 1 1-2 0v-1.7a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.6 15.5a1 1 0 0 1 1-1H41a1 1 0 1 1 0 2h-3.4a1 1 0 0 1-1-1ZM40.857 19.893a1 1 0 0 1 0 1.414l-1.7 1.7a1 1 0 0 1-1.414-1.414l1.7-1.7a1 1 0 0 1 1.414 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m37.457 18.193 2.55 2.55-1.414 1.414-2.55-2.55 1.414-1.414ZM30.65 24a1 1 0 0 1 1-1h1.7a1 1 0 1 1 0 2h-1.7a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 19.6a1 1 0 0 1 1 1V24a1 1 0 1 1-2 0v-3.4a1 1 0 0 1 1-1ZM24.993 19.893a1 1 0 0 1 1.414 0l1.7 1.7a1 1 0 0 1-1.414 1.414l-1.7-1.7a1 1 0 0 1 0-1.414Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m29.807 19.607-2.55 2.55-1.414-1.414 2.55-2.55 1.414 1.414ZM24 13.65a1 1 0 0 1 1 1v1.7a1 1 0 1 1-2 0v-1.7a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 15.5a1 1 0 0 1 1-1h3.4a1 1 0 1 1 0 2H24a1 1 0 0 1-1-1ZM28.107 7.993a1 1 0 0 1 0 1.414l-1.7 1.7a1 1 0 0 1-1.414-1.414l1.7-1.7a1 1 0 0 1 1.414 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m28.393 12.807-2.55-2.55 1.414-1.414 2.55 2.55-1.414 1.414ZM8 6v34h34v2H7a1 1 0 0 1-1-1V6h2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 17a1 1 0 0 1 1-1h1.871c2.432 0 4.813.74 6.957 2.14 2.141 1.397 3.984 3.41 5.403 5.859 1.282 2.215 2.919 3.982 4.764 5.186C27.838 30.388 29.844 31 31.86 31h7.64a1 1 0 1 1 0 2h-7.64c-2.432 0-4.813-.74-6.957-2.14-2.141-1.397-3.984-3.41-5.403-5.859-1.283-2.215-2.919-3.982-4.765-5.186C12.892 18.612 10.887 18 8.871 18H7a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.293 26.51a1 1 0 0 1 1.414 0l4.78 4.783a1 1 0 0 1 0 1.414l-4.78 4.782a1 1 0 0 1-1.414-1.414L39.366 32l-4.073-4.075a1 1 0 0 1 0-1.415Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgChartInfectedDecreasing;
