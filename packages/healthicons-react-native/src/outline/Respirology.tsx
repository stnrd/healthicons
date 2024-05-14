import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRespirology = (passedProps: SvgProps) => {
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path d="M17.706 14.24c3.83-.003 3.783 4.837 3.758 7.323l-.003.525c0 .507.023 1.106.048 1.76.115 3.038.276 7.27-1.539 9.082-2.247 2.245-6.744 3.37-8.995 1.503-2.25-1.867 1.483-20.188 6.731-20.193ZM26.49 21.56c-.028-2.485-.084-7.325 3.747-7.329 5.247-.004 9.011 18.311 6.764 20.182-2.248 1.871-6.747.753-8.998-1.488-1.818-1.81-1.664-6.041-1.554-9.079.024-.654.046-1.253.045-1.761 0-.16-.002-.335-.004-.525Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.015 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H23.015Zm.976 16.045a2.87 2.87 0 0 0 1.62.72h.01l.027.002h.024s.002 0 .043-.998c.042-1 .044-1 .044-1h.003l.004.001h.007l.007.001h-.006a.87.87 0 0 1-.35-.137c-.136-.093-.418-.338-.417-1.124l.005-7.575L25.014 8H39a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h13.97l.001 3.935.005 7.575c.001.786-.28 1.03-.417 1.123a.871.871 0 0 1-.35.137l-.007.001h.015l.004-.001h.003s.002 0 .043.999c.042.999.044.999.044.999h.01l.014-.001a1.293 1.293 0 0 0 .138-.014 2.87 2.87 0 0 0 1.518-.708Z"
      />
    </Svg>
  );
};
export default SvgRespirology;
