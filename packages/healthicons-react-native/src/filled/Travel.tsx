import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTravel = (passedProps: SvgProps) => {
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
        d="M24 6c-4.5 0-7 1.2-7 1.2V12l-3.529 3.529c-.593.593-.236 1.588.6 1.648 2.017.143 5.434.323 9.929.323 2.206 0 4.152-.043 5.8-.104h-.017a6 6 0 1 1-11.567 0c-.74-.027-1.42-.058-2.036-.09a8 8 0 1 0 15.64 0c.816-.043 1.522-.088 2.109-.13.836-.06 1.193-1.054.6-1.647L30.999 12V7.2S28.5 6 24 6Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m24.288 28.042 6.542 1.947 5.607-3.816A1 1 0 0 1 38 27v5h-2v-3.11l-4 2.722V40c0 .768.289 1.47.764 2H15.236c.475-.53.764-1.232.764-2v-8.465l-4-2.666V32h-2v-5a1 1 0 0 1 1.555-.832l5.696 3.797 6.46-1.923A.979.979 0 0 1 24 28c.083 0 .166.01.247.031l.008.002a.892.892 0 0 1 .033.01ZM25 30.341l5 1.488V40h-5v-9.659Zm-7 1.488 5-1.488V40h-5v-8.17Z"
        fill="#000"
      />
      <Path
        d="M37 34a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h5v-5a3 3 0 0 0-3-3h-2ZM9 34a3 3 0 0 0-3 3v5h5a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H9Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgTravel;
