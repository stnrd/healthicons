import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCallCentre = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M20.404 22.202a1.8 1.8 0 1 0 0-3.601 1.8 1.8 0 0 0 0 3.601Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.41 30.008V42h17.112v-6.512h4.293c.268 0 .524-.053.757-.148l-2.38-1.852h-4.67V40H13.409V29.202l-.56-.581C11.209 26.916 8 22.931 8 17.975c0-1.63.615-4.127 2.466-6.19 1.633-1.821 4.373-3.465 8.937-3.743v7.05a5.4 5.4 0 1 0 4.058 9.76l14.07 10.923a2.25 2.25 0 1 0 1.183-1.614L24.88 23.42a5.402 5.402 0 0 0-3.477-8.33V8.007c2.543.047 4.305.388 5.638.888 1.412.53 2.459 1.279 3.514 2.257l.142.132c1.034.958 1.342 1.244 1.517 1.71l4.233 11.27h-3.632v2.888l2 1.555v-2.443h1.632a1.998 1.998 0 0 0 1.873-2.701l-4.234-11.273c-.349-.93-1.024-1.55-1.874-2.33a83.35 83.35 0 0 1-.297-.274C29.55 7.492 26.859 6 20.798 6 9.006 6 6 13.875 6 17.975c0 5.767 3.683 10.241 5.41 12.033Zm8.993-6.208a3.4 3.4 0 1 0 .001-6.8 3.4 3.4 0 0 0 0 6.8Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgCallCentre);
export default ForwardRef;
