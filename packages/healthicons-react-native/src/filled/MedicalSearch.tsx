import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicalSearch = (passedProps: SvgProps) => {
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
      <Path d="M25 19v-4h4v4h4v4h-4v4h-4v-4h-4v-4h4Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 36c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 3.826 1.432 7.317 3.79 9.967l-1.158 1.159-1.705.119L6 39.172 8.828 42l6.884-6.884.158-1.4 1.346-1.346A14.942 14.942 0 0 0 27 36Zm0-2c7.18 0 13-5.82 13-13S34.18 8 27 8s-13 5.82-13 13 5.82 13 13 13Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m16.537 30.302.627.705.704.605a13.936 13.936 0 0 0 8.481 3.373c-7.275-.333-13.103-6.219-13.341-13.519a13.94 13.94 0 0 0 3.53 8.836Zm-1.463 2.795-1.705.12-5.955 5.955 1.414 1.414 5.93-5.93.158-1.4.158-.159Zm.638 2.02L8.828 42 6 39.172l6.927-6.927 1.705-.12 1.158-1.158A14.944 14.944 0 0 1 12 21c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15a14.942 14.942 0 0 1-9.784-3.63l-1.346 1.346-.158 1.4ZM26 20h-4v2h4v4h2v-4h4v-2h-4v-4h-2v4Zm3-5v4h4v4h-4v4h-4v-4h-4v-4h4v-4h4Zm11 6c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13Z"
      />
    </Svg>
  );
};
export default SvgMedicalSearch;
