import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRmnh = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.14 13.68a3.84 3.84 0 1 0 0-7.68 3.84 3.84 0 0 0 0 7.68Zm3.641.933a1.5 1.5 0 0 1 1.471.613l3.472 4.908a1.5 1.5 0 0 1-.068 1.822l-3.472 4.2a1.5 1.5 0 0 1-2.313-1.912l1.174-1.418a1.999 1.999 0 0 0-.448-.913 1.944 1.944 0 1 0-1.85-.875l-1.794-.604v-1.202a1 1 0 0 0-2 0v1.92a1 1 0 0 0 .681.948l.728.245-2.061 1.03c-.267.134-.492.32-.667.538l1.802 2.276a1.5 1.5 0 0 1-2.353 1.862l-3.6-4.548a1.5 1.5 0 0 1-.165-1.602l2.364-4.728a2.5 2.5 0 0 1 1.825-1.348l7.274-1.212Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.087 29.134a2.397 2.397 0 0 0 4.569-1.014h.003a4.3 4.3 0 0 0 2.286-.653 2.395 2.395 0 0 0 3.612.537c.763 3.073 1.512 5.314 1.976 6.582.224.616-.166 1.302-.816 1.38-3.977.479-8.579.49-12.544-.008a.984.984 0 0 1-.801-1.29c.42-1.287 1.124-3.481 1.715-5.534ZM28 38.014V40.5a1.5 1.5 0 0 0 2.948.39l.674-2.496a39.463 39.463 0 0 1-3.622-.38Zm7.376.372.676 2.505A1.5 1.5 0 0 0 39 40.5V38a41.55 41.55 0 0 1-3.624.386ZM22.853 29.149a1.5 1.5 0 0 0-.706-2.916c-2.86.692-5.018 1.003-7.141.995-2.128-.008-4.291-.336-7.17-.999a1.5 1.5 0 1 0-.673 2.924c1.706.392 3.223.685 4.668.865v4.334a1.47 1.47 0 0 0-.022.127l-.733 5.834a1.5 1.5 0 0 0 2.962.465l1.093-5.794 1.092 5.794a1.5 1.5 0 0 0 2.963-.465l-.734-5.834a1.525 1.525 0 0 0-.021-.127v-4.35c1.369-.178 2.81-.463 4.422-.853Z"
        fill="#333"
      />
      <Path d="M18 23a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="#333" />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgRmnh);
export default ForwardRef;
