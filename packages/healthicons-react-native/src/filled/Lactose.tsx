import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLactose = (passedProps: SvgProps) => {
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
        d="M16.592 22.776A3 3 0 0 1 19.584 20h8.833a3 3 0 0 1 2.991 2.776l1.35 18A3 3 0 0 1 29.767 44H18.234a3 3 0 0 1-2.992-3.224l1.35-18Zm4.408.84a1 1 0 0 1 1 1v14.769a1 1 0 1 1-2 0v-14.77a1 1 0 0 1 1-1Zm7 1a1 1 0 1 0-2 0v14.769a1 1 0 0 0 2 0v-14.77ZM24 10a6 6 0 0 0-6 6v.857c0 .631.512 1.143 1.143 1.143h9.714c.631 0 1.143-.512 1.143-1.143V16a6 6 0 0 0-6-6Zm-3 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
      <Path d="M31 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM30 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM27 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </Svg>
  );
};
export default SvgLactose;
