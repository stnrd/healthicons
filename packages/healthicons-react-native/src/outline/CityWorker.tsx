import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCityWorker = (passedProps: SvgProps) => {
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
        d="M24 26c5.525 0 10-4.475 10-10S29.525 6 24 6s-10 4.475-10 10 4.475 10 10 10Zm8-10c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8 8 3.58 8 8ZM29.035 27.874 26 36.544V36l-.575-4.021a1 1 0 0 0 .764-.736l.5-2A1 1 0 0 0 25.72 28h-3.438a1 1 0 0 0-.97 1.242l.5 2a1 1 0 0 0 .764.737l-.562 3.932-3.054-8.048-.02-.043a1.48 1.48 0 0 0-1.676-.791c-.341.083-.717.17-1.114.264-.937.219-1.994.466-2.996.745-1.413.394-2.877.89-3.894 1.558C7.387 30.826 6 32.453 6 34.5V42h36v-7.5c0-2.047-1.386-3.675-3.26-4.904-1.016-.668-2.48-1.164-3.893-1.558-1.003-.279-2.059-.526-2.996-.745a127 127 0 0 1-1.114-.264 1.479 1.479 0 0 0-1.675.791l-.027.054Zm2.409 1.378-.713-.168L26.909 40H40v-5.5c0-1.046-.704-2.147-2.357-3.232-.734-.483-1.93-.913-3.332-1.303a70.997 70.997 0 0 0-2.866-.713h-.001Zm-14.162-.171L21.425 40H8v-5.5c0-1.046.704-2.147 2.357-3.232.734-.483 1.93-.913 3.332-1.303.962-.268 1.945-.498 2.866-.713l.727-.171Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgCityWorker;
