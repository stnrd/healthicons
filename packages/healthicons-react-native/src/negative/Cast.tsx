import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCast = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M31 13a2 2 0 0 0-2 2v1.791l10.549-3.056A1.996 1.996 0 0 0 38 13h-7ZM29 20.677v-1.803l11-3.188v8.658l-11-3.667ZM40 26.45a.945.945 0 0 1-.058-.017L29 22.785v2.8l10.932 10.933c.044-.165.068-.339.068-.518v-9.55ZM27.489 26.903l11.029 11.03A2.002 2.002 0 0 1 38 38h-7.634v-.002l-6.434-11.095h3.557ZM21.62 26.903 28.055 38h-4.688l-6.434-11.097h4.689ZM14.681 27.008a2 2 0 0 0-1.358 1.895V36a2 2 0 0 0 2 2h5.731l-6.373-10.992Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM28 8h13v4.354c.622.705 1 1.632 1 2.646v21a4 4 0 0 1-4 4H15.322a3.985 3.985 0 0 1-2.686-1.036L9.003 38.6a1.114 1.114 0 0 1-.018-2.215l2.34-.273a3.806 3.806 0 0 1-.002-.112v-.068L7.995 35.6a1.105 1.105 0 0 1 0-2.198l3.327-.333v-.124l-4.325-.361a1.087 1.087 0 0 1 0-2.166l4.325-.36v-.113l-4.325-.361a1.087 1.087 0 0 1 0-2.166l4.797-.4c.041-.076.085-.151.13-.225l-1.772-1.61A1.28 1.28 0 0 1 11.6 23.1l3.492 1.81c.076-.004.153-.006.23-.006H27V15c0-1.014.378-1.94 1-2.646V8Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgCast);
export default ForwardRef;
