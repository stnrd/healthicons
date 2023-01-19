import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledMegaphone = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M12 31v7a2 2 0 1 0 4 0v-7h-4Zm-5-5v-6a3 3 0 0 1 3-3h6v12h-6a3 3 0 0 1-3-3Zm27-3v-1a3 3 0 0 0-3-3v7a3 3 0 0 0 3-3Zm-16 7V15l9.463-6.022A1 1 0 0 1 29 9.822v25.356a1 1 0 0 1-1.537.844L18 30Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M40.832 17.445a1 1 0 0 1-.277 1.387l-3 2a1 1 0 1 1-1.11-1.664l3-2a1 1 0 0 1 1.387.277ZM36 24a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm.168 3.445a1 1 0 0 1 1.387-.277l3 2a1 1 0 0 1-1.11 1.664l-3-2a1 1 0 0 1-.277-1.387Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledMegaphone);
export default ForwardRef;
