import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGlobe = (passedProps: SvgProps) => {
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
        d="M11.39 39.525A19.917 19.917 0 0 0 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24a19.945 19.945 0 0 0 6.382 14.648l.3.428a1 1 0 0 0 .473.363l.236.086ZM42 24.134a.997.997 0 0 0-.5-.134h-7.834a2.756 2.756 0 0 0-1.713.595 2.81 2.81 0 0 0-.983 1.526v.003l-.889 3.614a2.838 2.838 0 0 0 .503 2.397c.259.336.59.609.97.797.38.189.799.287 1.223.287h.439l.988 5.611C31.304 40.83 27.79 42 24 42a17.916 17.916 0 0 1-10.104-3.102l1.53-8.585h1.007a3.552 3.552 0 0 0 2.812-1.378 3.59 3.59 0 0 0 .65-3.067l-1.283-5.163-.001-.003a3.581 3.581 0 0 0-1.267-1.948A3.554 3.554 0 0 0 15.149 18H7.024C9.495 11.009 16.163 6 24 6c1.344 0 2.654.147 3.915.427l-.433 1.417h-.19a2.293 2.293 0 0 0-2.224 2.844c.016.064.038.127.067.187l2.61 5.505A2.29 2.29 0 0 0 29.939 18h11.037A17.971 17.971 0 0 1 42 24v.134Z"
      />
    </Svg>
  );
};
export default SvgGlobe;
