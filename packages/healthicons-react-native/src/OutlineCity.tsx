import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineCity = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M8 43a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M12 22v20h5V22h-5Zm-1-2a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V21a1 1 0 0 0-1-1h-7Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m17 4 16 6v14h-2V11.386l-12-4.5V42h8a1 1 0 0 0 1 1h5v1H17V4Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M20 13h2v2h-2v-2Zm4 0h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-8 4h2v2h-2v-2Zm4 0h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-8 4h2v2h-2v-2Zm4 0h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-8 4h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm4 0h2v2h-2v-2Z"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M29 26v16h7V26h-7Zm-1-2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V25a1 1 0 0 0-1-1h-9Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M34 30h-3v-2h3v2Zm0 4h-3v-2h3v2Zm0 4h-3v-2h3v2Zm0 4h-3v-2h3v2ZM15 13v9h-2v-9h2Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineCity);
export default ForwardRef;
