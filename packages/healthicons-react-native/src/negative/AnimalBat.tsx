import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalBat = (passedProps: SvgProps) => {
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
      <G clipPath="url(#animal_bat_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM20.994 12.89a1 1 0 0 0-1.988.22l.642 5.773c-4.246-.776-6.114-2.076-6.26-7.883C6.858 11 4 17.5 4 27c7.333-1.875 11.5 2.5 11.5 6.4H21l3 5.6 3-5.6h5.5c0-3.9 4.167-8.275 11.5-6.4 0-9.5-2.857-16-9.388-16-.146 5.806-2.014 7.107-6.26 7.883l.642-5.773a1 1 0 0 0-1.988-.22l-.177 1.59c-.984-.318-1.898-.485-2.835-.48-.933.005-1.844.18-2.822.494l-.178-1.604Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="animal_bat_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgAnimalBat;
