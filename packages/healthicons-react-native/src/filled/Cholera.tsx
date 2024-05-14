import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCholera = (passedProps: SvgProps) => {
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
      <Path d="M24 4H10v8h15a1 1 0 0 1 1 1v1h8c0-5.523-4.477-10-10-10ZM36 16H24v4h12v-4Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 36a8 8 0 1 1-16 0c0-7 8-14 8-14s8 7 8 14Zm-11.962-1.782a1 1 0 0 1-1.012-.988A3.192 3.192 0 0 1 28.18 30a1 1 0 0 1 .024 2 1.192 1.192 0 0 0-1.178 1.206 1 1 0 0 1-.988 1.012ZM32 31a1 1 0 1 0 0 2 1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3Zm-2.412 7.927a1 1 0 0 1-.762 1.191 3.192 3.192 0 0 1-3.803-2.434 1 1 0 0 1 1.954-.428c.14.643.777 1.05 1.42.909a1 1 0 0 1 1.191.762ZM34 39a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2-11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-2 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </Svg>
  );
};
export default SvgCholera;
