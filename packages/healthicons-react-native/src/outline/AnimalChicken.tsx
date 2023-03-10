import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalChicken = (passedProps: SvgProps) => {
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
        d="M19 42h9.5v2H19v-2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 38a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1ZM17 23a1 1 0 0 1 1 1c0 6.136 4.654 11 10.264 11 3.114 0 5.92-1.488 7.812-3.867a1 1 0 1 1 1.565 1.246C35.402 35.192 32.04 37 28.264 37 21.432 37 16 31.12 16 24a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.976 11a2.548 2.548 0 0 0-2.409 3.378l.572 1.659c.591 1.713.65 3.564.172 5.311l-.495 1.806c-.902 3.293-1.069 6.627.697 9.065C15.04 35.71 19.237 38 24 38c6.834 0 12.491-4.713 13.742-10.904.341-1.692.848-3.518 1.93-5.075l-12.148 1.957a6 6 0 0 1-6.12-2.87l-5.235-8.857A2.548 2.548 0 0 0 13.976 11Zm-4.3 4.03C8.659 12.077 10.853 9 13.977 9c1.608 0 3.097.85 3.915 2.233l5.235 8.857a4 4 0 0 0 4.08 1.914l12.58-2.027c1.63-.263 2.74 1.609 1.728 2.914-.97 1.251-1.459 2.85-1.812 4.6C38.258 34.644 31.758 40 24 40c-5.414 0-10.21-2.607-13.107-6.608-2.324-3.21-1.946-7.335-1.006-10.767l.495-1.805a6.998 6.998 0 0 0-.133-4.131l-.572-1.659Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.086 6c1.26-1.26 3.414-.368 3.414 1.414V9h1.586c1.782 0 2.674 2.154 1.414 3.414l-1.793 1.793a1 1 0 0 1-1.414-1.414L20.086 11H18.5a2 2 0 0 1-2-2V7.414L7.914 16H10.5a1 1 0 0 1 0 2H7.914C6.132 18 5.24 15.846 6.5 14.586L15.086 6Z"
        fill="#333"
      />
      <Path d="M15 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="#333" />
    </Svg>
  );
};
export default SvgAnimalChicken;
