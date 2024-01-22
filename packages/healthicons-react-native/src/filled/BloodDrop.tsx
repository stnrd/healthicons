import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodDrop = (passedProps: SvgProps) => {
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
        d="M38 30.263C38 37.85 31.732 44 24 44s-14-6.15-14-13.737C10 18.243 24 4 24 4s14 14.242 14 26.263Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 42c6.663 0 12-5.29 12-11.737 0-5.357-3.178-11.486-6.645-16.502A72.945 72.945 0 0 0 24 6.95a72.945 72.945 0 0 0-5.355 6.811C15.178 18.777 12 24.906 12 30.263 12 36.709 17.337 42 24 42ZM22.64 5.47C19.122 9.409 10 20.56 10 30.263 10 37.85 16.268 44 24 44s14-6.15 14-13.737C38 20.56 28.878 9.409 25.36 5.47 24.52 4.53 24 4 24 4s-.52.53-1.36 1.47Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgBloodDrop;
