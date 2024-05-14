import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIExamQualification = (passedProps: SvgProps) => {
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
        d="M28.753 6.341A1 1 0 0 0 27 7v7a2 2 0 0 0 2 2h6a1 1 0 0 0 .753-1.659l-7-8ZM20.75 23h-1.5l.75-1.8.75 1.8Zm6.808-18L37 15.387V40a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h13.558Zm-5.712 10.23a2 2 0 0 0-3.692 0l-5 12a2 2 0 0 0 3.692 1.54l.737-1.77h4.834l.737 1.77a2 2 0 0 0 3.692-1.54l-.103-.246c.084.01.17.016.257.016h1v1a2 2 0 1 0 4 0v-1h1a2 2 0 1 0 0-4h-1v-1a2 2 0 1 0-4 0v1h-1c-.648 0-1.224.308-1.59.786l-3.564-8.555ZM15 31a2 2 0 1 0 0 4 2 2 0 1 0 0 4h12a2 2 0 0 0 .002-4H33a2 2 0 1 0 0-4H15Z"
        stroke="#000"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default SvgIExamQualification;
