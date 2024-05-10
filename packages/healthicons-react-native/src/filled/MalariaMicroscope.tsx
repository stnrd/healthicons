import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMalariaMicroscope = (passedProps: SvgProps) => {
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
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20ZM10.745 21.309c1.18 1.527 4.627.84 7.699-1.533 3.071-2.374 4.605-5.536 3.425-7.063-1.18-1.528-4.627-.841-7.699 1.533-3.072 2.373-4.605 5.536-3.425 7.063Zm21.694 5.541c3.287 1.985 5.151 4.918 4.165 6.552-.987 1.634-4.45 1.35-7.737-.635-3.287-1.984-5.152-4.918-4.165-6.552.987-1.634 4.45-1.35 7.737.635Zm.832-3.995c1.749-.818 1.833-4.333.187-7.852-1.646-3.518-4.398-5.707-6.147-4.889-1.75.819-1.833 4.334-.187 7.852 1.645 3.519 4.398 5.707 6.147 4.89ZM21.62 29.933c1.784 3.55 1.8 7.145.036 8.032-1.765.887-4.641-1.27-6.426-4.82-1.784-3.549-1.8-7.145-.035-8.032 1.764-.887 4.64 1.271 6.425 4.82Z"
      />
    </Svg>
  );
};
export default SvgMalariaMicroscope;
