import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPavedRoad = (passedProps: SvgProps) => {
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
        d="M48 0H0v48h48V0ZM7.947 42c-1.104 0-2.005-.896-1.944-1.999A36 36 0 0 1 39.948 6.056c1.103-.062 2 .84 2 1.944v14c0 1.105-.899 1.989-1.996 2.111a18 18 0 0 0-15.894 15.893C23.936 41.102 23.052 42 21.948 42h-14Zm31.226-26.756c-.745.1-1.483.232-2.213.394l-.108-.488-.216-.977-.108-.488a29.016 29.016 0 0 1 2.376-.423l.067.495.135.991.067.496ZM32.67 16.97a27.013 27.013 0 0 0-4.01 2.025l-.261-.426-.524-.852-.262-.426a29.005 29.005 0 0 1 4.306-2.175l.188.464.375.927.188.463Zm-7.627 4.687a27.015 27.015 0 0 0-3.127 3.224l-.387-.317-.773-.634-.387-.317a29.039 29.039 0 0 1 3.358-3.463l.33.377.657.753.329.377Zm-5.676 6.923a27.008 27.008 0 0 0-1.9 4.07l-.47-.174-.938-.346-.469-.173a29 29 0 0 1 2.042-4.372l.433.249.868.497.434.249Zm-3.1 8.398a26.99 26.99 0 0 0-.326 2.224l-.497-.052-.995-.104-.497-.052c.084-.803.2-1.6.35-2.389l.49.094.984.186.49.093Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgPavedRoad;
