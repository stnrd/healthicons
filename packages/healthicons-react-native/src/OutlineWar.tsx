import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineWar = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M31 18a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H32a1 1 0 0 1-1-1Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M9.159 22h22.683c-.92-5.727-5.698-10-11.342-10S10.078 16.272 9.16 22Zm22.836 0Zm-22.99 0Zm-1.869.005C6.986 23.1 7.903 24 9.007 24h22.985c1.105 0 2.023-.9 1.872-1.995C32.931 15.218 27.303 10 20.5 10c-6.803 0-12.43 5.218-13.364 12.005ZM40.813 28H7.187c-.455 0-.799.204-.995.461a.84.84 0 0 0-.14.82l1.397 3.95C8.013 34.823 9.649 36 11.606 36h24.788c1.957 0 3.593-1.176 4.157-2.77l1.398-3.948a.84.84 0 0 0-.141-.82c-.197-.258-.54-.462-.995-.462ZM7.187 26c-2.174 0-3.709 2.006-3.021 3.949l1.397 3.948C6.43 36.347 8.864 38 11.606 38h24.788c2.742 0 5.176-1.653 6.043-4.103l1.397-3.948c.688-1.943-.847-3.949-3.021-3.949H7.187Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M15 33a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm9-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm9-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineWar);
export default ForwardRef;
