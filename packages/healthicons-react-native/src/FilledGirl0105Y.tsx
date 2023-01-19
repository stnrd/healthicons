import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledGirl0105Y = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M24 17.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm10.507 4.422a2 2 0 0 0-1.014-3.869c-3.809.999-6.673 1.446-9.485 1.434-2.819-.011-5.69-.483-9.523-1.44a2 2 0 0 0-.97 3.881c1.85.462 3.535.828 5.14 1.09-.316 2.1-1.996 5.559-2.965 7.425-.324.626.066 1.395.764 1.484 5.937.752 9.692.772 15.155.012.68-.095 1.06-.838.754-1.453-.944-1.891-2.64-5.471-3-7.443 1.604-.26 3.291-.635 5.144-1.12ZM19 33.514V37a1.5 1.5 0 0 0 2.948.391l.94-3.483A38.92 38.92 0 0 1 19 33.514Zm7.11.387.942 3.49A1.5 1.5 0 0 0 30 37v-3.5a40.878 40.878 0 0 1-3.89.4Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledGirl0105Y);
export default ForwardRef;
