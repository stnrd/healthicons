import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartInfectedStable = (passedProps: SvgProps) => {
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
        d="M22.92 31c-1.396 0-2.765.215-3.995.62l-3.672 1.208c-2.337.77-4.902 1.168-7.495 1.168H7a1 1 0 1 1 0-2h.758c2.393 0 4.746-.368 6.869-1.068l3.671-1.207A14.85 14.85 0 0 1 22.92 29c1.595 0 3.176.245 4.621.721m0 0 3.672 1.211c2.122.7 4.474 1.068 6.867 1.068H41a1 1 0 1 1 0 2h-2.92c-2.592 0-5.157-.398-7.493-1.168l-3.672-1.211A12.85 12.85 0 0 0 22.92 31"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.293 27.51a1 1 0 0 1 1.414 0l4.78 4.783a1 1 0 0 1 0 1.414l-4.78 4.782a1 1 0 0 1-1.414-1.414L40.366 33l-4.073-4.075a1 1 0 0 1 0-1.415Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6v34h34v2H7a1 1 0 0 1-1-1V6h2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 11.4a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2Zm-6.1 4.1a6.1 6.1 0 1 1 12.2 0 6.1 6.1 0 0 1-12.2 0ZM18.65 7a1 1 0 0 1 1-1h1.7a1 1 0 1 1 0 2h-1.7a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 11.25v-3.4h2v3.4h-2ZM24.893 7.993a1 1 0 0 1 1.414 0l1.7 1.7a1 1 0 0 1-1.414 1.414l-1.7-1.7a1 1 0 0 1 0-1.414Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m23.193 11.393 2.55-2.55 1.414 1.414-2.55 2.55-1.414-1.414ZM29 13.65a1 1 0 0 1 1 1v1.7a1 1 0 1 1-2 0v-1.7a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.6 15.5a1 1 0 0 1 1-1H29a1 1 0 1 1 0 2h-3.4a1 1 0 0 1-1-1ZM28.857 19.893a1 1 0 0 1 0 1.414l-1.7 1.7a1 1 0 0 1-1.414-1.414l1.7-1.7a1 1 0 0 1 1.414 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m25.457 18.193 2.55 2.55-1.414 1.414-2.55-2.55 1.414-1.414ZM18.65 24a1 1 0 0 1 1-1h1.7a1 1 0 1 1 0 2h-1.7a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 19.6a1 1 0 0 1 1 1V24a1 1 0 1 1-2 0v-3.4a1 1 0 0 1 1-1ZM12.993 19.893a1 1 0 0 1 1.414 0l1.7 1.7a1 1 0 0 1-1.414 1.414l-1.7-1.7a1 1 0 0 1 0-1.414Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m17.807 19.607-2.55 2.55-1.414-1.414 2.55-2.55 1.414 1.414ZM12 13.65a1 1 0 0 1 1 1v1.7a1 1 0 1 1-2 0v-1.7a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 15.5a1 1 0 0 1 1-1h3.4a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1ZM16.107 7.993a1 1 0 0 1 0 1.414l-1.7 1.7a1 1 0 0 1-1.414-1.414l1.7-1.7a1 1 0 0 1 1.414 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m16.393 12.807-2.55-2.55 1.414-1.414 2.55 2.55-1.414 1.414Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgChartInfectedStable;
