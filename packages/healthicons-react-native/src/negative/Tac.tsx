import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTac = (passedProps: SvgProps) => {
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
      <G clipPath="url(#tac_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM10.594 33.455A16.927 16.927 0 0 1 7 23c0-9.389 7.611-17 17-17s17 7.611 17 17c0 3.942-1.342 7.571-3.594 10.455l1.263 2.989C39.783 39.08 37.847 42 34.984 42H13.016c-2.863 0-4.799-2.92-3.685-5.556l1.263-2.99ZM34.984 40h-4.826l-1.6-8h1.027l1.992 5.974a1.5 1.5 0 1 0 2.846-.948l-2.544-7.633A3.5 3.5 0 0 0 28.559 27h-9.117a3.5 3.5 0 0 0-3.32 2.393l-2.545 7.633a1.5 1.5 0 1 0 2.846.948L18.415 32H19.6l-.8 4-.8 4h-4.984a2 2 0 0 1-1.842-2.778l4.727-11.19a2 2 0 0 1 1.842-1.222h1.621a5.988 5.988 0 0 1-1.086-2h-.535c-.765 0-1.495.218-2.117.606a8.526 8.526 0 1 1 16.843.061 3.996 3.996 0 0 0-2.212-.667h-.535a5.988 5.988 0 0 1-1.086 2h1.621A2 2 0 0 1 32.1 26.03l4.728 11.19A2 2 0 0 1 34.984 40ZM24.132 10.842c-1.48-.01-2.946.271-4.316.827l-.753-1.853a13.263 13.263 0 0 1 10.151.072l-.778 1.842a11.263 11.263 0 0 0-4.304-.888ZM28 21a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="tac_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgTac;
