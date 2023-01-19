import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeCast = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        d="M31 13a2 2 0 0 0-2 2v1.791l10.549-3.056A1.996 1.996 0 0 0 38 13h-7Zm-2 7.677v-1.803l11-3.188v8.658l-11-3.667Zm11 5.773a.945.945 0 0 1-.058-.017L29 22.785v2.8l10.932 10.933A2.01 2.01 0 0 0 40 36v-9.55Zm-12.511.453 11.029 11.03A2.002 2.002 0 0 1 38 38h-7.634v-.002l-6.434-11.095h3.557Zm-5.869 0L28.055 38h-4.688l-6.434-11.097h4.689Zm-6.939.105a2 2 0 0 0-1.358 1.895V36a2 2 0 0 0 2 2h5.731l-6.373-10.992Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM28 8h13v4.354c.622.705 1 1.632 1 2.646v21a4 4 0 0 1-4 4H15.322a3.985 3.985 0 0 1-2.686-1.036L9.003 38.6a1.114 1.114 0 0 1-.018-2.215l2.34-.273a3.806 3.806 0 0 1-.002-.112v-.068L7.995 35.6a1.105 1.105 0 0 1 0-2.198l3.327-.333v-.124l-4.325-.361a1.087 1.087 0 0 1 0-2.166l4.325-.36v-.113l-4.325-.361a1.087 1.087 0 0 1 0-2.166l4.797-.4c.041-.076.085-.151.13-.225l-1.772-1.61A1.28 1.28 0 0 1 11.6 23.1l3.492 1.81c.076-.004.153-.006.23-.006H27V15a3.99 3.99 0 0 1 1-2.646V8Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeCast);
export default ForwardRef;
