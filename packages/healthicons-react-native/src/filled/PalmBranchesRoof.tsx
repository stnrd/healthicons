import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPalmBranchesRoof = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
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
      ref={ref}
      {...props}
    >
      <Path
        d="M25.381 9.543a2.028 2.028 0 0 0-2.762 0L7.336 24.093c-.482.458-.463 1.1.171 1.344C9.144 26.066 13.366 27 24 27c10.634 0 14.856-.934 16.493-1.563.634-.243.653-.886.171-1.345L25.381 9.542Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m23.988 11.001-13.762 13.1C12.488 24.545 16.624 25 24 25c7.376 0 11.512-.456 13.774-.898L24.012 11a.067.067 0 0 0-.024 0Zm16.676 13.091c.482.459.463 1.102-.171 1.345C38.856 26.066 34.634 27 24 27c-10.634 0-14.856-.934-16.493-1.563-.634-.243-.653-.886-.171-1.345l15.283-14.55a2.028 2.028 0 0 1 2.762 0l15.283 14.55ZM12 29.407c2.602.336 6.417.593 12 .593s9.398-.257 12-.593v11.159C36 42 28 42 28 42v-5c0-1.912-1.692-4-4-4s-4 2.088-4 4v5s-8 0-8-1.434V29.407Z"
        fill="#333"
      />
      <Path
        d="M23.003 6.83c-.048-.447.412-.83.997-.83s1.045.383.997.83l-.409 3.755c-.025.234-.28.415-.588.415-.307 0-.563-.18-.588-.415l-.409-3.755Z"
        fill="#333"
      />
      <Path
        d="M26 7.187c.177-.39.706-.508 1.145-.255.44.254.602.77.352 1.12l-2.1 2.928c-.131.183-.41.222-.64.089-.23-.134-.337-.394-.244-.599L26 7.187ZM22.167 7.191c-.178-.393-.708-.512-1.147-.259-.44.254-.6.772-.35 1.123L22.78 11c.131.184.41.224.64.09.231-.133.337-.394.243-.6l-1.496-3.299Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPalmBranchesRoof);
export default ForwardRef;
