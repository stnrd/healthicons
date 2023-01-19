import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineIDocumentsAccepted = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
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
        d="M32.707 22.707a1 1 0 0 0-1.414-1.414L24 28.586l-3.293-3.293a1 1 0 0 0-1.414 1.414L24 31.414l8.707-8.707Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M38 15v21a3 3 0 0 1-3 3H17a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h11l10 10Zm-10 1a1 1 0 0 1-1-1V7H17a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V16h-8Zm1-7.172L34.172 14H29V8.828Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M12 11v27a3 3 0 0 0 3 3h19v2H15a5 5 0 0 1-5-5V11h2Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineIDocumentsAccepted);
export default ForwardRef;
