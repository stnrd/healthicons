import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAsthma = (passedProps: SvgProps) => {
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
        d="M7 8c-.31 0-.615.013-.918.038l-.164-1.994C6.275 6.015 6.636 6 7 6c7.18 0 13 5.82 13 13v1.697l2.796 4.194C23.681 26.22 22.729 28 21.13 28H20v2a1 1 0 0 1-1 1h-1a2 2 0 0 0-2 2h3a1 1 0 0 1 1 1v3c0 1.448-.77 2.715-1.917 3.416-.715.436-1.484.494-2.16.405-.666-.088-1.303-.324-1.826-.549L10 38.517V43H8v-6a1 1 0 0 1 1.394-.92l5.49 2.354c.473.202.909.353 1.3.404.377.05.646-.001.856-.13.578-.352.96-.986.96-1.708v-2h-3a1 1 0 0 1-1-1v-1a4 4 0 0 1 4-4v-2a1 1 0 0 1 1-1h2.131l-2.963-4.445A1 1 0 0 1 18 21v-2c0-6.075-4.925-11-11-11Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.72 15.034a1 1 0 0 0-1.223.706l-.493 1.83a1 1 0 0 0-1.372.65L31.247 27H28a1 1 0 0 0-1 1h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1 1h6.204a5 5 0 0 0 4.82-3.673l2.94-10.678a1 1 0 0 0-.551-1.177l-.294-.132.777-2.888a1 1 0 0 0-.708-1.226l-4.468-1.192ZM29 34h5.204a3 3 0 0 0 2.892-2.204l2.68-9.736-4.552-2.07-2.248 8.272a1 1 0 0 1-.965.738H29v5Zm7.82-15.482 2.422 1.102.463-1.72-2.536-.676-.349 1.294ZM26 30h1v3h-1v-3Z"
        fill="#000"
      />
      <Path d="M14.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#000" />
    </Svg>
  );
};
export default SvgAsthma;
