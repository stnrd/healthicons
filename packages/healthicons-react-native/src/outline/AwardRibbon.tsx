import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAwardRibbon = (passedProps: SvgProps) => {
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
        d="M23.999 6c-7.18 0-13 5.82-13 13 0 5.404 3.298 10.039 7.991 12H19v.004A12.96 12.96 0 0 0 24 32 12.96 12.96 0 0 0 29 31.003V31h.008c4.693-1.961 7.991-6.596 7.991-12 0-7.18-5.82-13-13-13ZM31 32.27C35.757 29.753 39 24.755 39 19c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 5.756 3.243 10.756 8.001 13.27V43a1 1 0 0 0 1.555.832L24 40.202l5.445 3.63A1 1 0 0 0 31 43V32.27Zm-2 .876A14.976 14.976 0 0 1 24 34c-1.753 0-3.435-.3-4.999-.853v7.985l4.445-2.964a1 1 0 0 1 1.11 0L29 41.132v-7.986ZM24 12a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-9 7a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
      />
    </Svg>
  );
};
export default SvgAwardRibbon;
