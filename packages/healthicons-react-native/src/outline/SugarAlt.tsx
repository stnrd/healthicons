import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSugarAlt = (passedProps: SvgProps) => {
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
        d="M43.993 17.883a1 1 0 0 1-.876 1.11c-8.512 1.002-14.91 1.974-20.233 8.632-1.4 1.75-2.465 3.033-3.346 3.958-.88.924-1.632 1.553-2.422 1.942-.814.4-1.587.506-2.423.523a27.36 27.36 0 0 1-1.313-.019h-.014c-.47-.014-.983-.029-1.571-.029-2.897 0-4.857-1.793-6.034-3.412a13.076 13.076 0 0 1-1.704-3.254l-.006-.019-.002-.006v-.002S4.047 27.305 5 27l-.952.305A1 1 0 0 1 5 26h16.628c5.825-7.017 12.914-8.012 21.255-8.993a1 1 0 0 1 1.11.876ZM20.006 28H6.517c.221.431.507.923.863 1.412C8.383 30.793 9.82 32 11.795 32c.617 0 1.155.016 1.623.03h.018c.479.014.868.025 1.217.018.678-.013 1.127-.094 1.58-.317.478-.236 1.04-.669 1.856-1.527.536-.562 1.157-1.28 1.917-2.204Z"
      />
      <Path d="M5 22h2v2H5v-2ZM13 22h2v2h-2v-2ZM10 21.586 11.414 23 10 24.414 8.586 23 10 21.586ZM18 21.586 19.414 23 18 24.414 16.586 23 18 21.586ZM11 18h2v2h-2v-2ZM8 17.586 9.414 19 8 20.414 6.586 19 8 17.586ZM12 13.586 13.414 15 12 16.414 10.586 15 12 13.586ZM16 17.586 17.414 19 16 20.414 14.586 19 16 17.586Z" />
    </Svg>
  );
};
export default SvgSugarAlt;
