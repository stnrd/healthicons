import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
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
      fill="none"
      color="currentColor"
      {...props}
    >
      <Path fill="#fff" d="M0 0h48v48H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM19.068 25.95A7.156 7.156 0 0 1 24 24c1.841 0 3.616.696 4.932 1.95C30.25 27.204 31 28.916 31 30.713v3.429a1 1 0 0 1-1 1h-1.56l-1.055 6.03A1 1 0 0 1 26.4 42h-4.8a1 1 0 0 1-.985-.828l-1.055-6.03H18a1 1 0 0 1-1-1v-3.428c0-1.797.75-3.51 2.068-4.764ZM24 26a5.156 5.156 0 0 0-3.553 1.398C19.514 28.286 19 29.48 19 30.714v2.429h1.4a1 1 0 0 1 .985.828L22.44 40h3.12l1.055-6.03a1 1 0 0 1 .985-.827H29v-2.429c0-1.234-.514-2.428-1.447-3.316A5.156 5.156 0 0 0 24 26Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.398 6.202a1 1 0 0 1 1.204 0l16.43 12.39c.028.021.054.043.079.066A2.792 2.792 0 0 1 42 20.6v18.925A2.482 2.482 0 0 1 39.525 42H8.475A2.482 2.482 0 0 1 6 39.525V20.6c0-.02 0-.04.002-.059.042-.719.36-1.393.887-1.883a.993.993 0 0 1 .079-.066l16.43-12.39ZM8.22 20.15a.792.792 0 0 0-.221.483V39.52a.482.482 0 0 0 .48.48h31.04s-.001 0 0 0a.484.484 0 0 0 .48-.48V20.635a.792.792 0 0 0-.22-.483L24 8.252 8.22 20.151Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgHomeQuarantine;
