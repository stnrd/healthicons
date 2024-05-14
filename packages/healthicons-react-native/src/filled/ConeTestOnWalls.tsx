import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgConeTestOnWalls = (passedProps: SvgProps) => {
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.709 38.513A2 2 0 0 0 19 36.643v-2.4l12.986-3.895c.52 1.626 1.992 2.799 3.728 2.799 2.17 0 3.929-1.832 3.929-4.091 0-.215-.016-.425-.046-.63C41.03 27.585 42 25.983 42 24.146c0-1.836-.969-3.438-2.403-4.28a4.29 4.29 0 0 0 .046-.629c0-2.259-1.759-4.09-3.929-4.09-1.64 0-3.045 1.046-3.633 2.533L19 13.756v-2.399a2 2 0 0 0-1.291-1.87L9.386 6.334A2.5 2.5 0 0 0 6 8.672v30.656a2.5 2.5 0 0 0 3.386 2.338l8.323-3.153Zm-3.778-6.66c-.318.953-.653 1.588-.931 1.948-.278-.36-.613-.995-.931-1.948C11.429 29.935 11 27.159 11 24s.43-5.935 1.069-7.853c.318-.953.653-1.588.931-1.948.278.36.613.995.931 1.948C14.571 18.065 15 20.841 15 24s-.43 5.935-1.069 7.853Zm17.65-3.895c-.354-.9-.58-2.273-.58-3.811 0-1.732.286-3.254.72-4.128C30.35 20.204 29 21.726 29 24c0 2.197 1.26 3.692 2.581 3.958ZM15.575 14.816 29.3 18.934C27.871 20.037 27 21.978 27 24c0 2.021.872 3.963 2.3 5.066l-13.725 4.117C16.446 30.982 17 27.685 17 24c0-3.685-.554-6.983-1.425-9.184Z"
      />
    </Svg>
  );
};
export default SvgConeTestOnWalls;
