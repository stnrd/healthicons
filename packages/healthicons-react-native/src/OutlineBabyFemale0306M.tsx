import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineBabyFemale0306M = (
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
        fillRule="evenodd"
        d="M18 12a6.002 6.002 0 0 1-5 5.917V20h2a1 1 0 1 1 0 2h-2v3a1 1 0 1 1-2 0v-3H9a1 1 0 1 1 0-2h2v-2.083A6.002 6.002 0 0 1 12 6a6 6 0 0 1 6 6Zm-6 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm15.476 26a.975.975 0 0 0 .11-.003c1.617-.048 2.896-.747 3.956-1.663.097.141.201.29.306.43.337.446.994 1.236 2.011 1.236h5C40.73 42 42 40.277 42 38.685c0-1.754-1.418-3.316-3.26-3.316h-2.648c-.814-.408-1.483-1.195-2.299-2.237l-.154-.197c-.488-.625-1.037-1.33-1.693-1.944l-.004-.055-.052.003a6.661 6.661 0 0 0-1.23-.91 5.921 5.921 0 0 0-2.942-.766h-5.271l.054 1.052c.262 5.029.393 7.71.459 9.134a160.008 160.008 0 0 1 .063 1.53l.001.027V42h4.452Zm2.535-10.017a3.926 3.926 0 0 0-1.975-.709l.42 8.577c.726-.214 1.383-.649 2.028-1.255l-.473-6.613Zm2.451 6.23c.195.215.367.46.509.666l.134.197c.119.175.224.33.339.482.267.354.4.426.426.44a.042.042 0 0 1 .005.002h4.985c.543 0 1.14-.592 1.14-1.315 0-.722-.594-1.316-1.26-1.316h-3.07l-.188-.08c-1.443-.612-2.442-1.876-3.264-2.924l-.034-.044.278 3.892ZM26.46 40l-.426-8.737h-1.48A1479.279 1479.279 0 0 1 24.986 40h1.473ZM14.2 32.4 12.25 35H9.5a3.5 3.5 0 1 0 0 7H14a3.5 3.5 0 0 0 2.8-1.4l3-4a3.5 3.5 0 1 0-5.6-4.2Zm1.6 1.2L13.25 37H9.5a1.5 1.5 0 0 0 0 3H14a1.5 1.5 0 0 0 1.2-.6l3-4a1.5 1.5 0 0 0-2.4-1.8ZM42 22.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineBabyFemale0306M);
export default ForwardRef;
