import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBasicMotorcycle = (passedProps: SvgProps) => {
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
        d="M37.5 36a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0 2a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.416 10.598A1 1 0 0 0 28.5 10H23v2h4.847l8.737 19.902a1 1 0 0 0 1.832-.804l-9-20.5ZM10.5 36a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0 2a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.63 22.724a1 1 0 0 0-1.406.145l-6.2 7.631H10.5a1 1 0 1 0 0 2h16a1 1 0 0 0 .776-.37l6.5-8a1 1 0 0 0-.145-1.406Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.903 16h-3.171a8.981 8.981 0 0 0-8.7 6.752L20 23v1h13v-2H21.418a6.983 6.983 0 0 1 6.314-4h3.171v-2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.552 18.28a1 1 0 0 0-.695-.28H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h13a1 1 0 0 0 .695-1.72l-4.143-4ZM15.453 20l2.072 2H8v-2h7.453ZM38.785 13.627l-7.644 2.94.718 1.866 5.356-2.06.571 3.428-5.134-.79-.304 1.977 7.866 1.21-1.43-8.571ZM22.626 31.986l-2.5-4.5 1.748-.972 2.5 4.5-1.748.972Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 22h-9a3 3 0 1 0 0 6h6a3 3 0 0 0 3-3v-3Zm-2 2v1a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h7Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgBasicMotorcycle;
