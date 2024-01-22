import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
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
      fill="none"
      color="currentColor"
      {...props}
    >
      <G clipPath="url(#lactose_svg__a)" fill="#000">
        <Path d="M22 24.615a1 1 0 1 0-2 0v14.77a1 1 0 0 0 2 0v-14.77ZM27 23.615a1 1 0 0 1 1 1v14.77a1 1 0 1 1-2 0v-14.77a1 1 0 0 1 1-1ZM21 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM25 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM27 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM19.584 20a3 3 0 0 0-2.992 2.776l-1.35 18A3 3 0 0 0 18.234 44h11.533a3 3 0 0 0 2.991-3.224l-1.35-18A3 3 0 0 0 28.417 20h-8.833ZM24 10a6 6 0 0 0-6 6v.857c0 .631.512 1.143 1.143 1.143h9.714c.631 0 1.143-.512 1.143-1.143V16a6 6 0 0 0-6-6Zm6-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        />
      </G>
      <Defs>
        <ClipPath id="lactose_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgLactose;
