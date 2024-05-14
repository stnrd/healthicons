import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHomeQuarantine = (passedProps: SvgProps) => {
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
      <G clipPath="url(#home-quarantine_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM20 18a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-.932 7.95A7.156 7.156 0 0 1 24 24c1.841 0 3.616.696 4.932 1.95C30.25 27.204 31 28.916 31 30.713v3.429a1 1 0 0 1-1 1h-1.56L27.59 40h11.93a.484.484 0 0 0 .48-.48V20.635a.792.792 0 0 0-.22-.483L24 8.252 8.22 20.151a.792.792 0 0 0-.22.483V39.52a.482.482 0 0 0 .48.48h11.93l-.85-4.857H18a1 1 0 0 1-1-1v-3.429c0-1.797.75-3.51 2.068-4.764ZM39.522 42h.003A2.482 2.482 0 0 0 42 39.525V20.6c0-.02 0-.039-.002-.058a2.792 2.792 0 0 0-.887-1.884.981.981 0 0 0-.079-.065L24.602 6.202a1 1 0 0 0-1.204 0l-16.43 12.39a.993.993 0 0 0-.079.065A2.792 2.792 0 0 0 6 20.599v18.926A2.482 2.482 0 0 0 8.475 42h31.047Z"
        />
      </G>
      <Defs>
        <ClipPath id="home-quarantine_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgHomeQuarantine;
