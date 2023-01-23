import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRheumatology = (passedProps: SvgProps) => {
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 6a1 1 0 0 1 1 1V15.682c0 .842-.342 1.649-.948 2.234l-.421.406a2.53 2.53 0 0 0 2.89 4.084l.205-.102a2.85 2.85 0 0 1 2.548 0l.206.102a2.53 2.53 0 0 0 2.89-4.084l-.422-.406A3.106 3.106 0 0 1 27 15.68V7a1 1 0 1 1 2 0v3.92c5.263 2.012 9 7.11 9 13.08s-3.737 11.068-9 13.08V41a1 1 0 1 1-2 0v-8.682c0-.842.342-1.649.948-2.234l.421-.406a2.53 2.53 0 0 0-2.89-4.085l-.205.103a2.85 2.85 0 0 1-2.548 0l-.206-.103a2.53 2.53 0 0 0-2.89 4.085l.422.406c.606.585.948 1.392.948 2.234V40.5a1 1 0 1 1-2 0v-3.42c-5.263-2.012-9-7.11-9-13.08s3.737-11.068 9-13.08V7a1 1 0 0 1 1-1Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgRheumatology;
