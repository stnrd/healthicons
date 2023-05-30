import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNauseous = (passedProps: SvgProps) => {
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
      <G
        clipPath="url(#nauseous_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#333"
      >
        <Path d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Zm-2.5-8a.996.996 0 0 0-.63.224c-.204-.658-.62-1.264-1.09-1.85a1 1 0 0 0-1.56 1.251c.626.782.774 1.17.78 1.42.005.212-.09.566-.74 1.282a1 1 0 1 0 1.48 1.346c.537-.592.97-1.2 1.158-1.875A.995.995 0 0 0 21.5 34h5a.995.995 0 0 0 .602-.202c.189.674.62 1.283 1.158 1.875a1 1 0 1 0 1.48-1.346c-.65-.715-.745-1.07-.74-1.281.006-.25.154-.639.78-1.42a1 1 0 0 0-1.56-1.251c-.47.585-.886 1.19-1.09 1.849A.996.996 0 0 0 26.5 32h-5Zm-6.693-6.767c-.683-.438-1.183-1.145-1.064-1.883a.5.5 0 0 1 .668-.389c1.818.675 3.846.257 5.642-1.448a.5.5 0 0 1 .818.203c.231.689.024 1.618-.48 2.382a3.794 3.794 0 0 1-2.654 1.665c-1.198.177-2.216-.073-2.93-.53Zm17.947 0c.683-.438 1.184-1.145 1.065-1.883a.5.5 0 0 0-.668-.389c-1.818.675-3.846.257-5.642-1.448a.5.5 0 0 0-.818.203c-.232.689-.024 1.618.48 2.382a3.794 3.794 0 0 0 2.653 1.665c1.199.177 2.216-.073 2.93-.53Z" />
        <Path d="M0 0h48v48H0V0Zm24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Z" />
      </G>
      <Defs>
        <ClipPath id="nauseous_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgNauseous;
