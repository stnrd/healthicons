import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgConeTestOnNets = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M33.801 35c-.36-.278-.995-.613-1.948-.931C29.935 33.429 27.159 33 24 33s-5.935.43-7.853 1.069c-.953.318-1.588.653-1.948.931.36.278.995.613 1.948.931C18.065 36.571 20.841 37 24 37s5.935-.43 7.853-1.069c.953-.318 1.588-.653 1.948-.931ZM19.32 17.412l-4.504 15.013C17.018 31.554 20.316 31 24 31c3.685 0 6.982.554 9.184 1.425L28.68 17.412C27.966 18.924 26.14 20 24 20c-2.14 0-3.966-1.076-4.68-2.588Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h48v48H0V0Zm24 39c6.627 0 12-1.79 12-4 0-.208-.048-.413-.14-.612l-5.512-18.374c1.626-.52 2.798-1.993 2.798-3.728 0-2.17-1.831-3.929-4.09-3.929-.215 0-.425.016-.63.046C27.584 6.97 25.983 6 24.146 6c-1.837 0-3.438.969-4.28 2.403a4.29 4.29 0 0 0-.629-.046c-2.26 0-4.09 1.759-4.09 3.929 0 1.64 1.046 3.045 2.533 3.634l-5.54 18.468c-.092.2-.14.404-.14.612 0 2.21 5.373 4 12 4Zm15-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM27 41a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm14-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-29 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-5-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm34-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 30a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm26 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-17-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm21 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-25-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm32-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-32 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-2-4a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-1-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-1 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm30 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-9 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm18-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgConeTestOnNets);
export default ForwardRef;
