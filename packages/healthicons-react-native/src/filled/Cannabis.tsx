import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCannabis = (passedProps: SvgProps) => {
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
        d="m24 5.022.43.722C26.377 9.014 27.5 12.871 27.5 17c0 .968-.062 1.922-.181 2.856a18.675 18.675 0 0 1 11.458-7.467l.747-.156-.156.747a18.675 18.675 0 0 1-7.628 11.572c.416-.035.836-.052 1.26-.052 3.417 0 6.603 1.137 9.294 3.096l.556.404-.556.404C39.603 30.363 36.417 31.5 33 31.5c-1.47 0-2.899-.21-4.263-.607.25.333.483.684.696 1.053 1.158 2.006 1.57 4.26 1.332 6.498l-.072.684-.628-.28c-2.057-.913-3.804-2.396-4.962-4.402-.035-.06-.07-.122-.103-.183V41h-2v-6.737a9.987 9.987 0 0 1-.103.183c-1.158 2.006-2.904 3.489-4.962 4.403l-.628.279-.072-.684c-.237-2.238.174-4.492 1.332-6.498.213-.369.446-.72.697-1.053A15.253 15.253 0 0 1 15 31.5c-3.417 0-6.603-1.137-9.294-3.096L5.15 28l.556-.404C8.397 25.637 11.583 24.5 15 24.5c.424 0 .844.017 1.26.052A18.676 18.676 0 0 1 8.632 12.98l-.156-.748.748.156a18.675 18.675 0 0 1 11.458 7.467A22.46 22.46 0 0 1 20.5 17c0-4.129 1.123-7.986 3.07-11.256l.43-.722Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgCannabis;
