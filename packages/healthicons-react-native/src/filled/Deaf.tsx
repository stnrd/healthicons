import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDeaf = (passedProps: SvgProps) => {
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
      <Path d="M16 18c0-6.075 4.925-11 11-11s11 4.925 11 11c0 3.807-1.933 7.163-4.876 9.139C30.628 28.815 28 31.454 28 34.911V35a6 6 0 0 1-12 0v-2h-2v2a8 8 0 1 0 16 0v-.089c0-2.404 1.87-4.52 4.24-6.112A12.988 12.988 0 0 0 40 18c0-7.18-5.82-13-13-13s-13 5.82-13 13h2Z" />
      <Path d="M28.634 11.193a7 7 0 0 0-4.812.57l.908 1.782a5 5 0 0 1 5.805 7.99l1.415 1.415a7 7 0 0 0-3.316-11.757ZM13.586 25l-5.293-5.293 1.414-1.414L15 23.586l5.293-5.293 1.414 1.414L16.414 25l5.293 5.293-1.414 1.414L15 26.414l-5.293 5.293-1.414-1.414L13.586 25Z" />
    </Svg>
  );
};
export default SvgDeaf;
