import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSugar = (passedProps: SvgProps) => {
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
        d="M34.458 10.048a1 1 0 0 1 .974.207l8.235 7.379a1 1 0 0 1 .31.958l-2.353 10.783a1 1 0 0 1-.718.753l-10.588 2.838a1 1 0 0 1-.962-.254l-4.559-4.5a1 1 0 1 1 1.405-1.424l4.151 4.098 9.447-2.532 2.099-9.62-7.374-6.606-9.557 3.073-1.018 3.11a1 1 0 0 1-1.9-.622l1.176-3.595a1 1 0 0 1 .644-.64l10.588-3.406Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.721 20.025a1 1 0 0 1 .754 1.197l-2.5 11a1 1 0 0 1-1.95-.444l2.5-11a1 1 0 0 1 1.196-.753Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.737 13.853a1 1 0 0 1 1.41-.116l7.264 6.16 6.826-1.862a1 1 0 1 1 .526 1.93l-7.334 2a1 1 0 0 1-.91-.202l-7.666-6.5a1 1 0 0 1-.116-1.41ZM10.742 15.277a1 1 0 0 1 .965-.239l8.27 2.361a1 1 0 0 1 .694.714l2.297 8.972a1 1 0 0 1-.307.999l-6.433 5.666a1 1 0 0 1-.935.212L7.023 31.6a1 1 0 0 1-.691-.7l-2.298-8.5a1 1 0 0 1 .275-.984l6.433-6.14Zm.966 1.842L6.12 22.452l1.995 7.38 7.201 2.056 5.563-4.9-2.003-7.823-7.168-2.046Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.707 20.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-.975.256l-8-2.222a1 1 0 1 1 .535-1.927l7.438 2.066 3.588-3.587a1 1 0 0 1 1.414 0Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.757 24.03a1 1 0 0 1 1.213.727l2 8a1 1 0 1 1-1.94.486l-2-8a1 1 0 0 1 .727-1.213Z"
      />
    </Svg>
  );
};
export default SvgSugar;
