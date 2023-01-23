import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPlantationWorkerAlt = (passedProps: SvgProps) => {
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
        d="M0 0h48v48H0V0Zm7 16.268a2 2 0 0 0 0 3.464v12.439A3.001 3.001 0 0 0 5 35v6h2v-4h2v4h2v-6a3.001 3.001 0 0 0-2-2.83V20h6v20a2 2 0 1 0 4 0v-9h3v9a2 2 0 1 0 4 0V27.917A6.002 6.002 0 0 0 25 16H9v-3H7v3.268ZM28 22a2 2 0 0 0-2-2v4a2 2 0 0 0 2-2Zm-7.5-9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm16.414 4.595A.996.996 0 0 1 37 18v23a1 1 0 0 1-2 0v-9.945c-.001.52-.04.88-.04.88s-2.928.393-4.083-.75c-1.154-1.143-.837-4.12-.837-4.12s2.928-.393 4.083.75c.738.73.874 2.21.877 3.183V18c0-.144.03-.282.086-.405-.714-.792-1.586-1.986-1.586-3.095 0-1.877 2.5-4 2.5-4s2.5 2.123 2.5 4c0 1.109-.872 2.303-1.586 3.095Zm.963 17.22c1.155-1.142 4.083-.75 4.083-.75s.317 2.977-.837 4.12c-1.155 1.142-4.083.75-4.083.75s-.317-2.977.837-4.12Zm4.083-14.75s-2.928-.393-4.083.75c-1.154 1.143-.837 4.12-.837 4.12s2.928.393 4.083-.75c1.154-1.143.837-4.12.837-4.12Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgPlantationWorkerAlt;
