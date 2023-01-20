import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalDonkey = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M31.5 41h5.1l2.256-7.025L36.6 23.95c.912.753 1.671 1.26 2.898 3.278.485.804 1.434.214 2.103.006.411-.309.523-.92.248-1.377l-1.103-1.815c-1.586-2.611-4.236-4.167-7.093-4.167H20.4l-4.568-5.013c-2.832-.45-2.749-5.035-5.198-7.716a.43.43 0 0 0-.697.074c-.692 1.148-.58 5.716.343 6.729.186.204.41.327.636.463-.124.105-.265.191-.36.333l-4.197 6.13a2.135 2.135 0 0 0-.169 2.068l.805 1.766c.304.667.928 1.093 1.609 1.093h1.744c.478 0 .933-.21 1.27-.58L14 21.916l2.8 7.836 1 6.707-1 2.707S15 38.5 15 41h4.971s.495-1.298.429-3c-.108-2.786-.652-4.657.571-5.69 2.187 2.423 4.529 2.19 6.88.69 1.204-.333 4.16-3.38 4.75-1.69.59 1.69 2.546 1.525 2.433 2.665C36.6 38 33.7 37.43 33.19 39.167M31.5 41c0-2.395 1.508-1.736 1.676-1.818M31.5 41l1.676-1.818m.014-.015a.025.025 0 0 1-.014.015m.014-.015-.014.015"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAnimalDonkey);
export default ForwardRef;
