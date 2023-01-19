import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineQuestionTriangle = (
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
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M24 6a1 1 0 0 1 .894.553l17 34A1 1 0 0 1 41 42H7a1 1 0 0 1-.894-1.447l17-34A1 1 0 0 1 24 6ZM8.618 40h30.764L24 9.236 8.618 40Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M25 35a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1.503-14.715c1.209-.587 2.596-.821 3.881-.78 1.272.04 2.688.36 3.867 1.144 1.256.835 2.252 2.233 2.252 4.112 0 1.877-.774 3.359-2.1 4.273a5.241 5.241 0 0 1-.959.52A2.5 2.5 0 0 1 22.5 30v-1.441a2.5 2.5 0 0 1 2.333-2.495c.23-.015.41-.045.54-.079.046-.012.084-.024.113-.035.005-.031.008-.072.01-.124a1.587 1.587 0 0 0-.02-.014c-.196-.13-.63-.29-1.257-.31-.614-.02-1.175.105-1.541.282a1.02 1.02 0 0 0-.272.174 2.5 2.5 0 0 1-4.827-1.302c.441-1.718 1.715-2.788 2.918-3.371Zm3.818 1.218c-1.017-.032-2.074.159-2.946.581-.873.424-1.605 1.105-1.853 2.07a.5.5 0 1 0 .969.249c.15-.585.609-1.074 1.32-1.419.703-.34 1.595-.51 2.478-.481.886.028 1.712.252 2.3.644a2.1 2.1 0 0 1 .676.691c.178.309.238.627.238.923 0 .502-.095.874-.235 1.155-.14.278-.335.487-.567.648-.478.329-1.119.455-1.729.496a.5.5 0 0 0-.466.499V30a.5.5 0 1 0 1 0v-.176a1 1 0 0 1 .725-.962 3.529 3.529 0 0 0 1.037-.475c.736-.507 1.235-1.345 1.235-2.626 0-1.093-.556-1.912-1.36-2.447-.785-.522-1.808-.778-2.822-.81Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineQuestionTriangle);
export default ForwardRef;
