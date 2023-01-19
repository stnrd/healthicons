import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledHospital = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M8 43a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM19 8h-9V6h9v2Zm19 0h-9V6h9v2Zm-19 3h-7V9h7v2Zm17 0h-7V9h7v2Zm-4 27H16v-2h16v2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M29 4H19a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-4 3v3h3v2h-3v3h-2v-3h-3v-2h3V7h2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M26 6v3h3v4h-3v3h-4v-3h-3V9h3V6h4Zm-3 4h-3v2h3v3h2v-3h3v-2h-3V7h-2v3Zm6-5H19a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM19 4h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M16 20h4v3h-4v-3Zm0 5h4v3h-4v-3Zm0 5h4v3h-4v-3Zm6-10h4v3h-4v-3Zm0 5h4v3h-4v-3Zm0 5h4v3h-4v-3Zm6-10h4v3h-4v-3Zm0 5h4v3h-4v-3Zm0 5h4v3h-4v-3Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M12 42V7h2v35h-2Zm22 0V7h2v35h-2Zm-11-6h-6v6h6v-6Zm2 0v6h6v-6h-6Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M29 42v-4h2v4h-2Zm-12 0v-4h2v4h-2Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledHospital);
export default ForwardRef;
