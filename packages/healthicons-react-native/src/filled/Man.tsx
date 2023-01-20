import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMan = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
      ref={ref}
      {...props}
    >
      <Path
        d="M28 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM18 18.82c-.217.513-.41 1.19-.564 1.995C17.03 22.931 17 25.273 17 26a2 2 0 1 1-4 0c0-.773.026-3.431.508-5.94.238-1.236.616-2.607 1.265-3.717.651-1.115 1.822-2.343 3.671-2.343h11.112c1.849 0 3.02 1.228 3.671 2.343.649 1.11 1.027 2.48 1.265 3.717.482 2.509.508 5.167.508 5.94a2 2 0 1 1-4 0c0-.727-.03-3.069-.436-5.185-.155-.805-.347-1.482-.564-1.994V42a2 2 0 0 1-3.994.153l-1-13A2.02 2.02 0 0 1 25 29h-2c0 .051-.002.102-.006.153l-1 13A2 2 0 0 1 18 42V18.82Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgMan);
export default ForwardRef;
