import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSocialDistancing = (passedProps: SvgProps) => {
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
      <Path d="M11.537 10.293a1 1 0 0 1 0 1.414L10.244 13h27.512l-1.293-1.293a1 1 0 0 1 1.414-1.414l2.121 2.121a2 2 0 0 1 0 2.829l-2.121 2.12a1 1 0 0 1-1.414-1.413l.95-.95H10.588l.95.95a1 1 0 0 1-1.415 1.414l-2.121-2.122a2 2 0 0 1 0-2.828l2.121-2.121a1 1 0 0 1 1.414 0Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 25.5c0 1.934-1.566 3.5-3.5 3.5A3.499 3.499 0 0 1 8 25.5a3.5 3.5 0 0 1 3.5-3.5c1.934 0 3.5 1.566 3.5 3.5ZM11.5 27a1.499 1.499 0 1 0 0-3 1.5 1.5 0 1 0 0 3ZM4 34.267C4 31.428 8.997 30 11.5 30s7.5 1.43 7.5 4.267V38H4v-3.733Zm2 0c0-.127.168-.707 1.64-1.378 1.303-.594 2.895-.89 3.86-.89.965 0 2.557.296 3.86.89 1.472.671 1.64 1.251 1.64 1.377V36H6v-1.733ZM40 25.5c0 1.934-1.566 3.5-3.5 3.5a3.499 3.499 0 0 1-3.5-3.5c0-1.934 1.566-3.5 3.5-3.5s3.5 1.566 3.5 3.5ZM36.5 27a1.499 1.499 0 1 0 0-3 1.5 1.5 0 1 0 0 3ZM29 34.267C29 31.428 33.997 30 36.5 30s7.5 1.43 7.5 4.267V38H29v-3.733Zm2 0c0-.127.168-.707 1.64-1.378 1.303-.594 2.895-.89 3.86-.89.965 0 2.557.296 3.86.89 1.472.671 1.64 1.251 1.64 1.377V36H31v-1.733Z"
      />
    </Svg>
  );
};
export default SvgSocialDistancing;
